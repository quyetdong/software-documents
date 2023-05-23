## at command
- a daemon service
- run invisibly in the background, doing things behind the scenes
- only run one-time tasks (no recurring)
- cannot run or be recovered when the computer is off at the scheduled time
- 
## cron
- can run recurring jobs
- `crontab`: short for cron table
- `sudo cron status` (sudo service cron status)
- `crontab -l`
- `sudo crontab -u root -e`
- cannot run or be recovered when the computer is off at the scheduled time

## cron directories
- `cron.hourly`
- `cron.daily`
- `cron.weekly`
- `cron.monthly`

## Anacron
- can recover missed jobs
- 