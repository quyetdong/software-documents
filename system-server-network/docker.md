## Docker
- Docker Environment variables (runtime variables, set default value in Dockerfile)
  >> override default value by optionn -e in docker run command

- Docker Command instructions: CMD ... (shell command - default command)
- Docker Entrypoint instructions: ENTRYPOINT ... (command that will be appended by command line arguments when container starts)

>> should be in JSON format (to combine ENTRYPOINT and CMD instructions in Dockerfile)
>> when container starts, it starts the Command instruction if no Entrypoint instruction is defined or no argument passed when user run the image.
cmd is ignored if passing any arguments when starting the container


- to override ENTRYPOINT instruction: use --entrypoint option when run an image (docker run --entrypoint ...)


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
