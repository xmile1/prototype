- Relational databases are designed to run on a single server in order to maintain the integrity of the table mappings 
and avoid the problems of distributed computing.With this design, 
- if a system needs to scale, customers must buy bigger, more complex, and more expensive proprietary hardware with more processing power, 
memory, and storage.
- Upgrades are also a challenge, as the organization must go through a lengthy acquisition process, 
and then often take the system offline to actually make the change.
- This is all happening while the number of users continues to increase, 
causing more and more strain and increased risk on the under - provisioned resources.




- NoSQL databases, on the other hand, usually support auto-sharding, meaning that they natively and automatically spread data across an arbitrary number of servers, without requiring the application to even be aware of the composition of the server pool.
- Data and query load are automatically balanced across servers, and when a server goes down, it can be quickly and transparently replaced with no application disruption.

## SQL vs NoSQL: High - Level Differences
- SQL databases are table based databases, This means that SQL databases represent data in form of tables which consists of n number of rows of data
- NoSQL databases are document based, key - value pairs, graph databases or wide - column stores.NoSQL databases are the collection of key - value pair, documents, graph databases or wide - column stores which do not have standard schema definitions which it needs to adhered to.

- SQL databases have predefined schema whereas 
- NoSQL databases have dynamic schema for unstructured data.

- SQL databases are vertically scalable, SQL databases are scaled by increasing the horse - power of the hardware.
- the NoSQL databases are horizontally scalable. scaled by increasing the databases servers in the pool of resources to reduce the load.

- SQL databases uses SQL(structured query language) for defining and manipulating the data, which is very powerful.
- queries are focused on collection of documents.Sometimes it is also called as UnQL (Unstructured Query Language).The syntax of using UnQL varies from database to database.

- SQL database examples: MySql, Oracle, Sqlite, Postgres and MS - SQL.
- NoSQL database examples: MongoDB, BigTable, Redis, RavenDb, Cassandra, Hbase, Neo4j and CouchDb

- For complex queries: SQL databases are good fit for the complex query intensive environment whereas NoSQL databases are not good fit for complex queries.On a high - level, 
- NoSQL don’t have standard interfaces to perform complex queries, and the queries themselves in NoSQL are not as powerful as SQL query language.

-  SQL databases are not best fit for hierarchical data storage.
- NoSQL database fits better for the hierarchical data storage as it follows the key - value pair way of storing data similar to JSON data.NoSQL database are highly preferred for large data set(i.e for big data).

- SQL databases are vertically scalable.You can manage increasing load by increasing the CPU, RAM, SSD, etc, on a single server.On the other hand, - NoSQL databases are horizontally scalable.You can just add few more servers easily in your NoSQL database infrastructure to handle the large traffic.

- SQL databases are best fit for heavy duty transactional type applications, as it is more stable and promises the atomicity as well as integrity of the data.
- While you can use NoSQL for transactions purpose, it is still not comparable and sable enough in high load and for complex transactional applications.

-  SQL databases emphasizes on ACID properties(Atomicity, Consistency, Isolation and Durability) 
- NoSQL database follows the Brewers CAP theorem(Consistency, Availability and Partition tolerance)

// For DB types: On a high - level, we can classify SQL databases as either open - source or close - sourced from commercial vendors.NoSQL databases can be classified on the basis of way of storing data as graph databases, key - value store databases, document store databases, column store database and XML databases.


### Why CHoose which db


#### NoSQL
- Need to scale horizontally
- The need to store serialized arrays in JSON objects
- Problems easily pre-defining your schema because of the nature of your data model
- speed and scale over data integrity

// Storing records in the same collection that have different fields or attributes.... User table === some users have 5columns more of data while others have 5columns different from the others


####SQL
- In non - relational databases like Mongo, there are no joins like there would be in relational databases.This means you need to perform multiple queries and join the data manually within your code-- and that can get very ugly, very fast.
- Schema based like we have all information relation before we start our designs or are the going to change



## Security for DB
- Ensure Physical Database Security
- Use Web Application and Database Firewalls
- Harden Your Database to Fullest Extent Possible
- up-to-date version of db software
- Encrypt Your Data
- confidential data is encrypted in motion over your network to protect against database security threats
- It's also important to uninstall or disable any features or services that you don't need to use, and ensure that you change the passwords of any default accounts from their default values - or better still, delete any default accounts that you don't need.
- Finally, ensure that all database security controls provided by the database are enabled(most are enabled by default ) unless there is a specific reason for any to be disabled.
- ensure that you are not storing any confidential information that doesn't need to be there
- Manage Database Access Tightly
- Accounts should be locked after three or four login attempts
- Audit and Monitor Database Activity




## How to optimize complex queries
// Use indexing
// A database index is a data structure that improves the speed of data retrieval operations on a database table at the cost of additional writes and storage space to maintain the index data structure.Indexes are used to quickly locate data without having to search every row in a database table every time a database table is accessed.Indexes can be created using one or more columns of a database table, providing the basis for both rapid random lookups and efficient access of ordered records.

// Only Retrieve the Data You Really Need, Select only columns you need
// Similarly, if you only need a limited number of rows you should use the LIMIT clause(or your database’s equivalent).Take a look at the following code:

// Avoid using functions in predicates.
// The index is not used by the database if there is a function on the column.For example:
// SELECT * FROM TABLE1 WHERE UPPER(COL1) = 'ABC'

// Avoid subqueries
// SELECT user_id, last_name FROM users WHERE EXISTS (SELECT * FROM donationuser WHERE donationuser.user_id = users.user_id);
// SELECT DISTINCT users.user_id FROM users INNER JOIN donationuser ON users.user_id = donationuser.user_id;

// The use of the % wildcard at the beginning of the LIKE pattern will prevent the database from using a suitable index if such exists. Since the system doesn’t know what the beginning of the name column is, it will have to perform a full table scan anyway. In many cases, this may slow the query execution. If the query can be rewritten in the following way:
// SELECT * FROM users WHERE name LIKE '%bar%';
// SELECT * FROM users WHERE name LIKE 'bar%';

// Create Joins with INNER JOIN Rather than WHERE

// SELECT Customers.CustomerID, Customers.Name, Sales.LastSaleDate
// FROM Customers, Sales
// WHERE Customers.CustomerID = Sales.CustomerID
// gets all the records and filters it

// SELECT Customers.CustomerID, Customers.Name, Sales.LastSaleDate
// FROM Customers
// INNER JOIN Sales
// ON Customers.CustomerID = Sales.CustomerID
// will only get the exact results

// Run Analytical Queries During Off - Peak Times




// INNER JOIN
// The following SQL statement selects all orders with customer information:

// LEFT JOIN
// Selects all in the left table columns and add any available from the right table data and null if no data

// RIGHT JOIN
// opposite of left join

// FULL JOIN
// selects all from both and sets null where neccessary

// The UNION operator is used to combine the result - set of two or more SELECT statements.

// Each SELECT statement within UNION must have the same number of columns
// The columns must also have similar data types
// The columns in each SELECT statement must also be in the same order



// WHy use ORM
It abstracts 





// ACID
##Atomicity
if any of the statements constituting a transaction fails to complete, the entire transaction fails and the database is left unchanged

// Main article: Atomicity(database systems)
// Transactions are often composed of multiple statements.Atomicity guarantees that each transaction is treated as a single "unit", which either succeeds completely, or fails completely: if any of the statements constituting a transaction fails to complete, the entire transaction fails and the database is left unchanged.An atomic system must guarantee atomicity in each and every situation, including power failures, errors and crashes.

##Consistency
Consistency ensures that a transaction can only bring the database from one valid state to another

// Consistency ensures that a transaction can only bring the database from one valid state to another, maintaining database invariants: any data written to the database must be valid according to all defined rules, including constraints, cascades, triggers, and any combination thereof.This prevents database corruption by an illegal transaction, but does not guarantee that a transaction is correct.

##Isolation
Each transaction occurs either before or after every other transaction and the view of the database that a transaction sees at its beginning is only altered by the transaction itself before its conclusion.No transaction should ever see the intermediate product of another transaction.


// Main article: Isolation(database systems)
// Transactions are often executed concurrently(eg.reading and writing to multiple tables at the same time).Isolation ensures that concurrent execution of transactions leaves the database in the same state that would've been obtained if the transactions were executed sequentially. Isolation is the main goal of concurrency control; depending on the method used, the effects of an incomplete transaction might not even be visible to other transactions.
// The database engine enforces isolation between multiple transactions occurring at or near the same time.Each transaction occurs either before or after every other transaction and the view of the database that a transaction sees at its beginning is only altered by the transaction itself before its conclusion.No transaction should ever see the intermediate product of another transaction.

## Durability
Durability guarantees that once a transaction has been committed, it will remain committed even in the case of a system failure(eg.power outage or crash).This usually means that completed transactions(or their effects) are recorded in non - volatile memory.




## BASE
## Basically Available: 
The NoSQL database approach focuses on the availability of data even in the presence of multiple failures. It achieves this by using a highly distributed approach to database management. Instead of maintaining a single large data store and focusing on the fault tolerance of that store, NoSQL databases spread data across many storage systems with a high degree of replication. In the unlikely event that a failure disrupts access to a segment of data, this does not necessarily result in a complete database outage

##Soft state: 
The state of the system could change over time, so even during times without input there may be changes going on due to ‘eventual consistency, ’ thus the state of the system is always ‘soft.’

## Eventual consistency: 
The system will eventually become consistent once it stops receiving input.The data will propagate to everywhere it should sooner or later, but the system will continue to receive input and is _NOT_ checking the consistency of every transaction before it moves onto the next one.


// https://www.lifewire.com/abandoning-acid-in-favor-of-base-1019674