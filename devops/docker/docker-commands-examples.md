## Docker
- Docker Environment variables (runtime variables, set default value in Dockerfile)
  >> override default value by optionn -e in docker run command

- Docker Command instructions: CMD ... (shell command - default command)
- Docker Entrypoint instructions: ENTRYPOINT ... (command that will be appended by command line arguments when container starts)

>> should be in JSON format (to combine ENTRYPOINT and CMD instructions in Dockerfile)
>> when container starts, it starts the Command instruction if no Entrypoint instruction is defined or no argument passed when user run the image.
cmd is ignored if passing any arguments when starting the container

- to override ENTRYPOINT instruction: use --entrypoint option when run an image (docker run --entrypoint ...)

## Access CLI of a running container
- `docker ps` to get the name/id of the existing container
- `docker exec -it <container name> /bin/bash`

## Container modes
- attach: you can listen to output printed by the container but not able to enter anything (not able to interact with this running container and with the application running into the container)
- detach: the container run, but you cannot listen to the output or interact with it
- interactive: you can listen to the output and interact with the container, allow us to be able to input smth into the container
-
## Delete Images & Containers
- `docker container prune [-f]`: delete all stopped containers
- `docker rm {containers separated by space} [-f]`: remove containers
- `docker system prune [-y]`: delete
  all stopped containers,
  all networks not used by at least one container,
  all dangling images,
  all dangling build cache
- `docker system prune -a [-y]`: delete
  all stopped containers,
  all networks not used by at least one container,
  all images without at least one container associcated to them
  all build cache
- `docker system prune -a --volumes [-y]`: delete
  all stopped containers
  all networks not used by at least one container,
  all images without at least one container associcated to them
  all build cache
  all volumes not used by at least one container
- `docker rmi {images separated by space} [-f]`: remove images (all the layers inside of the image)
- `docker image prune [-a -f]`: remove dangling [unused] images
- Delete all docker images
  `docker rmi $(docker images -a -q)`

## Commands
- `docker [command] --help`: to get available options for the command
- `docker attach {container_name/id}`: put a running container (in detach mode) to attach mode
- `docker logs {container_name/id}`: get logs of a container
- Build and run multiple containers with docker-compose:
  `docker-compose up -d` (d detach)
- List docker images
  `docker image ls` or `docker images -a`
  `docker images -a -q` to list all images ids
- restart a container in attach mode (default is detach):
  `docker start -a {container_name/id}`
- `docker run --rm {image}`: run a container and automatically remove when it exits
- `docker inspect {image/container}`: get image/container information
- `docker cp /local/directory/. {container}:/directory`: copy folder/files from local machine into a docker container (and vice versa)
-
## Examples
1. docker run -it centos bash
- Docker run the centos operating system, if don’t have “bash” in the command, this command will just run the centos operating system
	and then exit right after that because the “centos” image only contain an operating system without any program running on it.
	This image is also called a base image.
- Since we have the “bash” command in the docker command, so the container will run the operating system and then run the bash command, meaning it will open a bash window inside the container
- “-it”: log into the container ( i: interactive, t: terminal ) 
- we will log into the bash window inside the container
- “-d”: detach
- 
