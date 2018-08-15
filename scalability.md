

Aim of Scaling
- availablility
- performance
- reliability of data
- Manageability easy to maintain

 How to scale a node app
- Load balancing by Cloning e.g using the node cluster module and also using pm2 and nginx
- Caches. which can be on a request node, or global cache, Distributed cache
- Proxies, which can receive multiple of same kind of requests and then make a single request to the server and send the response.
- creating microservices
- service workers

pm2
- with pm2 you can create multiple instances of your application just by passing an argument
`e.g pm2 start app.js -i max`
- monitor the CPU  Meomory etc usage
- run the application on startup of the machine
- runs your app as a daemon so terminaing the terminal doesnt terminate the application
- graceful shut down, reload of our application, hotReload
- manage Logs


- caching using service worker

1. Install

2. cache
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/styles/main.css',
  '/script/main.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});



Scalability is the capability of a system, network, or process to handle a growing amount of work, or its potential to be enlarged to accommodate that growth. For example, a system is considered scalable if it is capable of increasing its total output under an increased load when resources(typically hardware) are added.

Vertical scalability (scaling up/down) is the ability to increase the capacity of existing hardware or software by adding resources - for example, adding processing power to a server to make it faster e.g for Relational Db, adding more hardware 
- requires downtime while new resources are being added and has limits that are defined by hardware e. gAmazone 68GB.

horizontal scalability (or scale out /in) is the ability to connect multiple entities so that they work as a single logical unit.
-  adding a new computer to a distributed software
- provide administrators with the ability to increase capacity on the fly.
- only limited by how many entities can be connected successfully. 

Loading Testing simply means testing the performance of your application on a particular load
ab benchmarking app
https:github.com/loadimpact/k6
k6.io
https:artillery.io/
http:www.badboy.com.au/


ab benchmarking app for load testing

Load scalability: The ability for a distributed system to easily expand and contract its resource pool to accommodate heavier or lighter loads or number of inputs. Alternatively, the ease with which a system or component can be modified, added, or removed, to accommodate changing load.

Load Balancing
 so you can distribute incoming traffic across multiple virtual machine instances
 .Load balancing provides the following benefits:
 1. Scale your application
 2. Support heavy traffic
 3. Detect and automatically remove unhealthy virtual machine instances.Instances that become healthy again are automatically re - added.
 4. Route traffic to the closest virtual machine

 e.g KUBERNETES on Google Scaling out a Deployment will ensure new Pods are created and scheduled to Nodes with available resources

 Autoscaling
 Compute Engine offers autoscaling to automatically add or remove virtual machines from an instance group based on increases or decreases in load.This allows your applications to gracefully handle increases in traffic and reduces cost when the need for resources is lower.You just define the autoscaling policy and the autoscaler performs automatic scaling based on the measured load.

