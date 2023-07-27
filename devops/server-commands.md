# Get logs 
- logs from container
  docker logs fwd.parquet_container --since 2021-12-22 --timestamps


# This command should print your local IP for you on Unix systems at least:
> ifconfig | grep "inet " | grep -Fv 127.0.0.1 | awk '{print $2}'

# add a user to the user group `docker` in your host to allow it to access docker service
`sudo usermod -a -G docker ec2-user`
