## Dockerfile
- Contain steps to create a image file

## Docker-compose
- Defining and running multiple-container docker application
- Use dockerfile to build images
- Using in microservices to run multiple services together

## SSH into a running container
- `docker ps` to get the name/id of the existing container
- `docker exec -it <container name> /bin/bash`


## Commands
- Build and run multiple containers with docker-compose:
  `docker-compose up -d` (d detach)
- List docker images

  `docker image ls` or `docker images -a`

  `docker images -a -q` to list all images ids

- Delete all docker images
  `docker rmi $(docker images -a -q)`
