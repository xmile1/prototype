It goes beyond SQL vs NoSQL
Each db has it strenght and weaknesses
choosing a db would mean considering tradeoffs


##Relational Databases

####USES
- situations where data integrity is absolutely paramount (i.e., for financial applications)
- Highly structured data

####PROS
- It works for highly structured data
- Authorization is built into SQL db systems
- Data is easily stored and retrieved using SQL queries
- It support ACID transaction

####CONS
- Its works poorly for unstructured data
- Fixed Schema doesnt react well to change, It is easier to use when you have a completely preplanned schema
- they are mostly more expensive to set up and grow
- Sharding relational databases while maintaining ACID compliance can be a challenge.


##NoSQL
###Document store
A document store is a nonrelational database that stores data JSON, BSON, or XML documents

##USES
- Flexible, They handle semistructured and unstructured data well. Users can create their desired structure in a particular document without affecting all documents
- Rapid prototyping

###PROS
- The sharding necessary for horizontal scaling is much more intuitive than with relational databases, so document stores scale out fast and efficiently
   
    shard: Each shard contains a subset of the sharded data. Each shard can be deployed as a replica set.
    mongos: The mongos acts as a query router, providing an interface between client applications and the sharded cluster.
    config servers: Config servers store metadata and configuration settings for the cluster. As of MongoDB 3.4, config servers must be deployed as a replica set (CSRS).

###CONS
- while querying can be done in a document it’s not possible across documents
- Document databases sacrifice ACID compliance for flexibility

###Key-value store (Redis, Memcached)
where each value is associated with a specific key. It’s also known as an associative array.
“Values” are stored as blobs and don’t need predefined schema. They can take nearly any form: numbers, strings, counters, JSON, XML, HTML, PHP, binaries, images, short videos, lists, and even another key-value pair encapsulated in an object. 

###USES
- User profiles and settings
- Unstructured data such as product reviews or blog comments

###PROS
- It’s incredibly flexible, able to handle a very wide array of data types easily
- Keys are used to go straight to the value with no index searching or joins, so performance is high. 
- Portability is another benefit
- Finally, they’re highly horizontally scalable 

###CONS
- It’s impossible to query values, because they’re stored as a blob
- Not all objects are easy to model as key-value pairs, either.


### Wide-column store (Cassandra, HBase)



### Diff between consistency in CAP and ACID


### ACID

# Atomic
All operations in a transaction succeed or every operation is rolled back.
# Consistent
On the completion of a transaction, the database is structurally sound.
# Isolated
Transactions do not contend with one another. Contentious access to data is moderated by the database so that transactions appear to run sequentially.
# Durable
The results of applying a transaction are permanent, even in the presence of failures.


##Atomicity: 
Either the task (or all operations) within a transaction are performed or none of them are. This is the all-or-none principle. If one element of a transaction fails the entire transaction fails.
##Consistency: 
The transaction must meet all protocols or rules defined by the system at all times. The transaction does not violate those protocols and the database must remain in a consistent state at the beginning and end of a transaction; there are never any half-completed transactions.
## Isolation: 
No transaction has access to any other transaction that is in an intermediate or unfinished state. Thus, each transaction is independent unto itself. This is required for both performance and consistency of transactions within a database.
## Durability: 
Once the transaction is complete, it will persist as complete and cannot be undone; it will survive system failure, power loss and other types of system breakdowns.


##BASE
## Basic Availability
The database appears to work most of the time.
## Soft-state
Stores don’t have to be write-consistent, nor do different replicas have to be mutually consistent all the time.
## Eventual consistency
Stores exhibit consistency at some later point (e.g., lazily at read time).


###CAP
####PARTITION TOLERANCE
This condition states that the system continues to run, despite the number of messages being delayed by the network between nodes. A system that is partition-tolerant can sustain any amount of network failure that doesn’t result in a failure of the entire network. Data records are sufficiently replicated across combinations of nodes and networks to keep the system up through intermittent outages. When dealing with modern distributed systems, Partition Tolerance is not an option. It’s a necessity. Hence, we have to trade between Consistency and Availability.

###CONSISTENCY
 A system has consistency if a transaction starts with the system in a consistent state, and ends with the system in a consistent state. In this model, a system can (and does) shift into an inconsistent state during a transaction, but the entire transaction gets rolled back if there is an error during any stage in the process.

  Consistency refers to every client having the same view of the data.

 ###Availability
 Every non-failing node returns a response for all read and write requests in a reasonable amount of time. The key word here is every. To be available, every node on (either side of a network partition) must be able to respond in a reasonable amount of time.

 Every client gets a response, regardless of the state of any individual node in the system.

    Availability comprises four distinct components, which, in combination, assure that systems are running and business can be conducted:

    Manageability—the ability to create and maintain an effective environment that delivers service to users
    Recoverability—the ability to reestablish service in the event of an error or component failure
    Reliability—the ability to deliver service at specified levels for a stated period
    Serviceability—the ability to determine the existence of problems, diagnose their cause(s), and repair the problems.



 Picking consistency means not being able to answer a client's query as the system cannot guarantee to return the most recent write

 being available means being able to respond to a client's request but the system cannot guarantee consistency, 

 Database systems designed with traditional ACID guarantees in mind such as RDBMS choose consistency over availability, whereas systems designed around the BASE philosophy, common in the NoSQL movement for example, choose availability over consistency.[6]