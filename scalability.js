// scaling out /in is the ability to scale by add / remove resource instances(e.g.virtual machine), whereas scaling up / down is the ability to scale by changing allocated resources(e.g.memory / CPU / storage capacity)[6]

// Vertical scalability is the ability to increase the capacity of existing hardware or software 
//by adding resources - for example, adding processing power to a server to make it faster
// eg for Relational Db, adding more hardware 


// Vertical scalability, on the other hand, increases capacity by adding more resources, 
// such as more memory or an additional CPU, to a machine.Scaling vertically, which is also called scaling up, 
// usually requires downtime while new resources are being added and has limits that are defined by hardware.
// When Amazon RDS customers need to scale vertically, for example, they can switch from a smaller to a bigger machine, 
// but Amazon's largest RDS instance has only 68 GB of memory.



//horizontal scalability is the ability to connect multiple entities so that they work as a single logical unit.
// An important advantage of horizontal scalability is that it can provide administrators with the ability to increase capacity on the fly.
// Another advantage is that in theory, horizontal scalability is only limited by how many entities can be connected successfully. 


// To scale horizontally(or scale out /in) means to add more nodes to(or remove nodes from) a system, such as adding a new computer to a distributed software application.An example might involve scaling out from one Web server system to three.As computer prices have dropped and performance continues to increase, high - performance computing applications such as seismic analysis and biotechnology workloads have adopted low - cost "commodity" systems for tasks that once would have required supercomputers.System architects may configure hundreds of small computers in a cluster to obtain aggregate computing power that often exceeds that of computers based on a single traditional processor.The development of high - performance interconnects such as Gigabit Ethernet, InfiniBand and Myrinet further fueled this model.Such growth has led to demand for software that allows efficient management and maintenance of multiple nodes, as well as hardware such as shared data storage with much higher I / O performance.Size scalability is the maximum number of processors that a system can accommodate.[4]

// To scale vertically(or scale up / down) means to add resources to(or remove resources from) a single node in a system, typically involving the addition of CPUs or memory to a single computer.Such vertical scaling of existing systems also enables them to use virtualization technology more effectively, as it provides more resources for the hosted set of operating system and application modules to share.Taking advantage of such resources can also be called "scaling up", such as expanding the number of Apache daemon processes currently running.Application scalability is the improved performance of running applications on a scaled - up version of the system.[4]


// Loading Testing simply means testing the performance of your application on a particular load
// https://github.com/loadimpact/k6
k6.io
https://artillery.io/
http://www.badboy.com.au/

// Scalability is the capability of a system, network, or process to handle a growing amount of work, or its potential to be enlarged to accommodate that growth.[1] For example, a system is considered scalable if it is capable of increasing its total output under an increased load when resources(typically hardware) are added.

// Load scalability: The ability for a distributed system to easily expand and contract its resource pool to accommodate heavier or lighter loads or number of inputs.Alternatively, the ease with which a system or component can be modified, added, or removed, to accommodate changing load.




// Load Balancing
// Google Cloud Platform offers server - side load balancing so you can distribute incoming traffic across multiple virtual machine instances.Load balancing provides the following benefits:

// 1. Scale your application
// 2. Support heavy traffic
// 3. Detect and automatically remove unhealthy virtual machine instances.Instances that become healthy again are automatically re - added.
// 4. Route traffic to the closest virtual machine

// Autoscaling
// Compute Engine offers autoscaling to automatically add or remove virtual machines from an instance group based on increases or decreases in load.This allows your applications to gracefully handle increases in traffic and reduces cost when the need for resources is lower.You just define the autoscaling policy and the autoscaler performs automatic scaling based on the measured load.