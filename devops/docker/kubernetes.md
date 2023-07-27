## Kubernetes: Independent Container Orchestration
- Kubernetes is: an additional tool/framework, collection of concepts/standard 
- an open-source system for automating deployment, scaling, management of containerized applications
- independent of the cloud provider
- container might be crashed and go down and need to be replaced while running, we cannot monitor it 24/24
- scaling containers (increase/descrease the number of containers of one same image), and distributing traffic equally btw containers
-
## Core concepts & Architecture
- Smallest possible unit: Pod (container(s))
- Workder node: machine/virtual instance 
- Proxy/ Config: control network traffic of the pods on a worker node
- Master node: have Control Plane running on it, control worker nodes (exactly: pods running on worker nodes)
- Cluster: Master node + worker nodes
-
## What kubernetes do for you and What you need to do/setup
- YOu do: 
 * Create the Cluster and the Node instances (Master and Worker nodes)
 * Setup API server, Kubernetes services/software on Nodes
 * Create other (cloud provider) resources that might be needed (Load balancer, File system)
- Kub do:
 * Create your objects (Pods) and manage them
 * Monitor Pods and re-create them, scale Pods ...
 * Kubernetes utilizes the provided resources to apply your configuration / goals (distribute traffic, ...)
 * 
## Worker Node
- Includes:
 * kubelet: the service that is responsible for communication btw Master and Worker node
 * Pods: host containers and their resources (mananged by Master node)
 * docker
 * kube-proxy: responsible for network communication of Pods in the node
 * 
## Master Node
- API Server: counter point for the `kubelets` to communicate
- Scheduler: watch our Pods, select which Worker node to run new Pods on (give API Server information to tell to a specific Worker node on which new Pods should be created...)
- Kube-Controller-Manager: Watch and control Worker nodes overall, ensure the correct number of Pods...
- Cloud-Controller-Manager: Like Kube-Controller-Manager but for a specific cloud provider
- 
## Services
- A logical set of Pods (and containers) with unique, independent IP addresses; for network communication of the Pods (and containers)
- 

