# Thay đổi port ssh sang 7909 (khởi động lại máy chủ) - becareful, don't change port if don't understand.
```bash
sudo sed -i 's/#Port 22/Port 7909/g' /etc/ssh/sshd_config
grep 7909 /etc/ssh/sshd_config
sudo /etc/init.d/ssh restart
```

# Chuẩn bị các file .dll 
- Tạo thư mục chứa dự án: /{project_folder}
- Chạy `dotnet publish -c Release` tại thư mục {project_folder} (vd: navig8-fixture-board-api) tại máy phát triển 
- Upload tất cả các file .dll lên thư mục {project_folder} (vd: /home/ubuntu/navig8-fixture-board-api) trên máy chủ
```
!! CHÚ Ý: API chạy Load Balancing trên 2 máy chủ nên chức năng HangFire sẽ không chạy được cùng lúc với 1 collection. 
Do vậy, trong cấu hình HangfireLog cần sửa tên collection thành `db_log_api_cluster_02` cho máy chủ thứ 2.
```

# Cài đặt mySQL

```shell
sudo apt install mysql-client mysql-server
sudo systemctl start mysql
sudo systemctl enable mysql
sudo mysql_secure_installation
# Đặt password là: y5h3AyivkA584
```
```shell
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
# Sửa dòng sau sang 0.0.0.0 nếu muốn public
# bind-address = 0.0.0.0
```

```shell
sudo mysql -u root -p
CREATE USER 'root'@'%' IDENTIFIED BY 'y5h3AyivkA584';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';
#password: y5h3AyivkA584

CREATE DATABASE navig8_fixture_board;
CREATE USER  'navig8@localhost'  IDENTIFIED BY  'd#3Ay#vtA584';
GRANT ALL ON navig8_fixture_board.* TO 'navig8@localhost' IDENTIFIED BY 'd#3Ay#vtA584' WITH GRANT OPTION;
# Để public
CREATE USER 'navig8'@'%' IDENTIFIED BY 'd#3Ay#vtA584';
GRANT ALL ON navig8_fixture_board.* TO 'navig8'@'%' IDENTIFIED BY 'd#3Ay#vtA584' WITH GRANT OPTION;
#Đề public
FLUSH PRIVILEGES;
EXIT;
```

# Cài đặt và cấu hình nginx
- Cài đặt:

```shell
sudo apt-get update
sudo apt-get install nginx
```
- Cấu hình: 
+  Mở file /etc/nginx/nginx.conf, sửa: `user www-data` thành `user ubuntu`
+  Mở file /etc/nginx/sites-available/default, sửa theo cấu trúc sau:
+ `sudo chmod -R 777 /var/lib/nginx/proxy`

Máy API:

```yaml
server {
    listen    80;
    server_name  navig8-fixture-board-api.vinova.sg;

    location / {
      proxy_pass   http://localhost:5000/;
    }
}


server {
    listen 443;
    listen [::]:443;
    server_name navig8-fixture-board-api.vinova.sg;

    ssl on;
    ssl_certificate /etc/nginx/ssl/vinova/ssl-bundle.crt;
    ssl_certificate_key /etc/nginx/ssl/vinova/vinova.key;

    location / {
      proxy_pass http://localhost:5000/;
    }
}
```	


# Cài đặt thư viện GDI cho oAuth
Để không sinh ra lỗi khi upload avatar, ta cần cài thư viện gdi:

```
sudo apt-get install -y libgdiplus
```


# Cài đặt .net core trên Ubuntu 16.4 (Xem: https://www.microsoft.com/net/download/linux-package-manager/ubuntu16-04/sdk-current)
```shell
wget https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
sudo add-apt-repository universe
sudo apt-get update
sudo apt-get install apt-transport-https
sudo apt-get update
sudo apt-get install dotnet-sdk-3.1
```

# Cài đặt supervisord

## Bước 1
```shell
sudo apt-get install supervisor
sudo touch /var/run/supervisor.sock
sudo chmod 777 /var/run/supervisor.sock
```

## Bước 2
 - Cho phép Supervisor khởi động lại sau reboot.
```shell
sudo systemctl enable supervisor
sudo systemctl start supervisor
```


## Bước 3
 - Tạo ra 1 file `api.conf` trong thư mục /etc/supervisor/conf.d/
 - Thêm vào những dòng sau:
Máy API
```shell
[program:api]
directory={project_folder_directory} (vd: /home/ubuntu/navig8-fixture-board-api)
command=/usr/bin/dotnet {project_folder_directory}/navig8-fixture-board-api.dll
autostart=true
autorestart=true
startretries=10
user=ubuntu
```

```shell
sudo supervisorctl reload
```

## Start / Stop service

```shell
sudo /etc/init.d/supervisor start hoặc stop
```

## Xem log
```shell
sudo tail -n -100 /var/log/supervisor/api-stderr---supervisor-xxxxx_.log
```

## Kiểm tra tình trạng chạy service api 
```shell
sudo supervisorctl status api
```

## Kiểm tra tình trạng service 
```shell
/etc/init.d/supervisor status
```

## Restart MySQL
```shell
sudo service mysql restart
```


## Cronjob dump mysql-
```shell
mysqldump -u navig8 -p{PASSWORD} navig8_fixture_board 2>> "/navig8_fixture_board_`date '+%Y-%m-%d'`.sql"
#mysqldump -u navig8 -pd#3Ay#vtA584 navig8_fixture_board > "navig8_fixture_board_`date '+%Y-%m-%d'`.sql"

*/30 * * * * /home/ubuntu/cron-job/mysql-backup.sh

```


## Tao file bash
```shell
#!/bin/sh

#Keep 48 newest file (1 backup file on each 30mins)
mysqldump -u navig8 -pd#3Ay#vtA584 navig8_fixture_board --ignore-table=navig8_fixture_board.TrackingVessel --ignore-table=navig8_fixture_board.VesselEmployment  | gzip > "/home/ubuntu/db_backup/navig8_fixture_board_`date '+%Y-%m-%d_%H-%M-%S'`.sql.gz"

#Keep 48 newest file (1 backup file on each 30mins)
find /home/ubuntu/db_backup -maxdepth 1 -type f | xargs -x ls -t | awk 'NR>48' | xargs -L1 rm
```


# Create certificate for using https
https://certbot.eff.org/
