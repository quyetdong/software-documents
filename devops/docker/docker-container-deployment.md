# From Development to Production
## Deploy to AWS EC2
- Three main steps
  * Create and launch: EC2 instance, VPC, Security group
  * Configure security group: expose required ports to WWW
  * SSH to the EC2 instance to install docker and run container
- Disadvantages
  * self-managed ec2 instance: security, firewall, capacity ...
  * do all steps manually: build, push image, configure the host machine (software, network, operating system update), pull/update image and run container
- 
## AWS ECS (Elastic Container Service) / Azure Container Service
- ECS
 * Cluster
 * Tasks: define containers, setup configuration
 * Services: Run defined tasks on cluster
## Database Management
- Manage your own database server: need to know how to scale it, backup the data regularly, performance issue ...
- Use cloud service: for example RDS for SQL databases, MongoDB Atlas for mongo databases...
- 
## React SPA (single page app)
- In development, `npm start` brings up an unoptimized web server (for purpose of development) together with the transformed front end codes (js, html, css) to serve these codes on browser
- So for production: Front end codes need to be built before deploying to production, and also we need to create an optimized server to serve these codes
 * optimization script needs to be executed after development but before deployment
- >> find a way to create Dockerfile for deployment to production
- 
