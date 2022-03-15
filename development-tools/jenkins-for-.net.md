Install Jenkins server to deploy .net core project

1, Install Virtual machine for practice (Virutal box, VMWare)

2, Install ubuntu server on Virtual machine

3, Install jenkins on ubuntu server
https://www.digitalocean.com/community/tutorials/how-to-install-jenkins-on-ubuntu-20-04

4, Configure port forwarding for ubuntu server to connect from local machine to virtual machine
https://www.techrepublic.com/article/how-to-use-port-forwarding-in-virtualbox/

5, Setup jenkins to connect to gitlab project
 - Install git on ubuntu server
 - Install git plugin on jenkins
 - Configure jenkins

6, Setup gitlab to connect to jenkins
  - Use integration or user webhook

7, Setup app server credentials (pem file) for jenkins server to connect to app server

8, Write shell script to deploy and run application on the app server

pwd
cd fwd.api
sudo bash build.sh
ssh -i $fwdclient_pem -o "StrictHostKeyChecking no" -t ubuntu@18.140.74.12 -p 22  bash -c  "'mkdir -p /home/ubuntu/fwdapi'"

scp -i $fwdclient_pem -P 22 -o StrictHostKeyChecking=no -Cvrp  bin/PublishOutput/*  ubuntu@18.140.74.12:/home/ubuntu/fwdapi

SSH_SCRIPT='cd /home/ubuntu/fwdapi
sudo docker build -t fwd.api .
sudo docker stop fwd.api_container || true
sudo docker rm fwd.api_container || true
sudo docker run -d -p 5000:80 -p 5001:443 --restart always --name fwd.api_container -e ASPNETCORE_ENVIRONMENT=prod fwd.api
exit
'
ssh -i $fwdclient_pem -o "StrictHostKeyChecking no" -t ubuntu@18.140.74.12 -p 22  bash -c  "'$SSH_SCRIPT'"


pwd
cd ..

pwd
cd fwd.uat1.api
sudo bash build.sh
ssh -i $fwdclient_pem -o "StrictHostKeyChecking no" -t ubuntu@18.140.74.12 -p 22  bash -c  "'mkdir -p /home/ubuntu/fwduat1api'"

scp -i $fwdclient_pem -P 22 -o StrictHostKeyChecking=no -Cvrp  bin/PublishOutput/*  ubuntu@18.140.74.12:/home/ubuntu/fwduat1api

SSH_SCRIPT='cd /home/ubuntu/fwduat1api
sudo docker build -t fwd.uat1.api .
sudo docker stop fwd.uat1api_container || true
sudo docker rm fwd.uat1api_container || true
sudo docker run -d -p 7000:80 -p 7001:443 --restart always --name fwd.uat1api_container -e ASPNETCORE_ENVIRONMENT=prod fwd.uat1.api
exit
'
ssh -i $fwdclient_pem -o "StrictHostKeyChecking no" -t ubuntu@18.140.74.12 -p 22  bash -c  "'$SSH_SCRIPT'"


pwd
cd ..

pwd
cd fwd.cms
sudo bash build.sh
ssh -i $fwdclient_pem -o "StrictHostKeyChecking no" -t ubuntu@18.140.74.12 -p 22  bash -c  "'mkdir -p /home/ubuntu/fwdcms'"

scp -i $fwdclient_pem -P 22 -o StrictHostKeyChecking=no -Cvrp  bin/PublishOutput/*  ubuntu@18.140.74.12:/home/ubuntu/fwdcms
SSH_SCRIPT='cd /home/ubuntu/fwdcms
sudo docker build -t fwd.cms .
sudo docker stop fwd.cms_container || true
sudo docker rm fwd.cms_container || true
sudo docker run -d -p 8000:80 -p 8001:443 --restart always --name fwd.cms_container -e ASPNETCORE_ENVIRONMENT=prod fwd.cms
exit
'
ssh -i $fwdclient_pem -o "StrictHostKeyChecking no" -t ubuntu@18.140.74.12 -p 22  bash -c  "'$SSH_SCRIPT'"

pwd
cd ..

pwd
cd fwd.parquet
sudo bash build.sh
ssh -i $fwdclient_pem -o "StrictHostKeyChecking no" -t ubuntu@18.140.74.12 -p 22  bash -c  "'mkdir -p /home/ubuntu/fwdparquet'"

scp -i $fwdclient_pem -P 22 -o StrictHostKeyChecking=no -Cvrp  bin/PublishOutput/*  ubuntu@18.140.74.12:/home/ubuntu/fwdparquet
SSH_SCRIPT='sudo mkdir -p /home/ubuntu/FWD_Datalake
cd /home/ubuntu/fwdparquet
sudo docker build -t fwd.parquet .
sudo docker stop fwd.parquet_container || true
sudo docker rm fwd.parquet_container || true
sudo docker run -d -p 9000:80 -p 9001:443 --restart always --name fwd.parquet_container -v /home/ubuntu/FWD_Datalake:/home/ubuntu/FWD_Datalake -e ASPNETCORE_ENVIRONMENT=prod fwd.parquet
sudo docker image prune -f
exit
'
ssh -i $fwdclient_pem -o "StrictHostKeyChecking no" -t ubuntu@18.140.74.12 -p 22  bash -c  "'$SSH_SCRIPT'"
