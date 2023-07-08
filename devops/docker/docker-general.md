## Docker: what, why, when?
- A container technology that create independent, standardized “application packages” which can run on different operating systems
- Help quickly to package and deploy applications together with its necessary tools and environment, so that we can guarantee the same behavior of the app when share it and run it on different systems
- When we need to share our application, deploy or run it to different hosts/machines: docker helps to make the process quickly without worrying about the differences of the host environments, guarantee the same behavior of the app on different hosts, avoid bugs related to the environment
- When we want to have separated environments for different projects/applications on the same machine
- lightweight, and quickly to setup and launch than virtual machine
- 
### Dockerfile
- Contain steps to create an image file
- 
### Images
- are blueprints, templates of containers
- Images are layer based
- An image is built up on separated layers, and can be re-used for later builds
- Each instruction in the Dockerfile creates a layer
- Whenever a layer changed, all subsequent layers are also re-executed
- 

## Docker-compose
- Make managing and running multiple-container project/application easier
- Use dockerfile to build images
- Using in microservices to run multiple services together
- 
- 
## Notes
- Docker engine: The tool that allows us to run docker commands on
- daemon: lay inside docker engine, the heart of docker, a process which keeps on running and ensure that Docker works
- 
## Managing Data - Volumes - docker arguments and environment variables
- Kinds of data in docker
  * Read-only application data: Source code + Environment >> stored in images
  * Temporay application data: temp data generated whilst the application is running >> stored in containers (aka the extra layer when run container)
  * Permanent app data: data generated whilst the app is running, stored in files or database, must not be lost if container removed/stop >> stored in containers with help of volumes
- Volumes: are folders on your host machine hard drive which are mounted ('made available', mapped) into containers, managed by Docker
 * volumes persist and continue to exist even if a container is shut down
 * Anonymous Volumes vs Named Volumes
 * Anonymous volumes: 
   + can defined inside the Dockerfile (when build image), or define when run a container (`-v /path/inside/container`)
   + is attached to a container, cannot share across containers
   + is useful for locking in certain data which already exists in the container, avoid this data being overwritten by another module
 * Named volumes: define when run a container (`-v volume_name:/path/inside/container`)
 * `docker volume --help`

## Bind mounts vs Volumes
- Volumes are managed by Docker, we don't know where on our host machine file system they are.
  For Bind mounts, we do know it.
- For bind mounts, we set the path to which the container internal path should be mapped on our host machine
  `docker run -d -p 3000:80 --rm --name feedback-app -v "$(pwd):/app" feedback`
- Combine bind mounts and volumes to exclude overwriting some folders inside containers by folders from host machine
  `docker run -d -p 3000:80 --rm --name feedback-app -v "$(pwd):/app" -v /app/node_modules feedback`
- read-only volume :ro
  `docker run -d -p 3000:80 --rm --name feedback-app -v "$(pwd):/app:ro" -v /app/temp -v feedbackdir:/app/feedback -v /app/node_modules feedback`
- 
## .dockerignore
- With dockerignore, we can specify which folders and files should not be copied by a copy instruction
-
## Docker Arguments and Environment variables
- Arguments: build-time arguments, set on image build via `--build-arg`
 * availabe inside of Dockerfile, not accessible in CMD or any application code
 * allow us to plug in different values into our Dockerfile/ or into our image when we build that image
 without having to hardcode these values into the Dockerfile
- Environment variables: run-time variables, set via `ENV` in Dockerfile or via `--env` on docker run
 * available inside of Dockerfile & in application code
 * environment variables help to increase security for the project 

## Networking
- which kinds of network we have, where you can send requests to from inside your containers (send http requests to some other service running on your machine, how you can reach out to the world wide web from inside your container...)
- how we can connect multiple containers so that they can interact with each other
- 
- Requests from inside container to WWW (world wide web): always work
- Requests from container to host machine (localhost): use `host.docker.internal` as address instead of `localhost`
- 
- Communicate btw containers by manually get the IP address of the other container after run `docker container inspect container_name`
- Communicate between containers through container network:
  * the communication is internal inside the network, so if you don't want a container be accessed from outside, you don't need to publish the port of that container
  * Create a container network by `docker network create network_name` 
  * run each container in the same network created in the previous step by the flag `--network`
  * communicate between containers in the same network by container_name
- Docker Networks actually support different kinds of "Drivers" which influence the behavior of the Network.
The default driver is the "bridge" driver - it provides the behavior shown in this module (i.e. Containers can find each other by name if they are in the same Network).
The driver can be set when a Network is created, simply by adding the --driver option. 
- 
## Building Multi-container applications
## Docker-compose
- A tool that allows you to replace Docker build and Docker run commands 
- Can replace multiple Docker build and Docker run commands with one configuration file
- Support a set of orchestration commands to start all expected services (containers) at once, and build all necessary images (if requried)
- Can use one command to stop everything and bring everything down
- `docker compose --help`
- `docker compose build`
- `docker compose up -d --build [service_name...]`
- `docker compose down -v`
-  
## Utility Containers
- Only contain the application environment
- To initialize an application project, where you can start writing your first lines of code
- `docker compose run --rm util-container-service bash`: run bash command in util-container-service
- `docker compose run --rm util-container-service npm init`: init a nodejs project
- `docker compose up`: meant to bring up services defined in a docker compose yml file (application containers)
- `docker compose run`: allow us to run a single service from docker-compose.yml 
-
## Complex Setup
- 

