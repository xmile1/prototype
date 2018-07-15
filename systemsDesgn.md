web vs mobile

Mobile - 
Needs more developers for IOS and Android
Reaches more people..
Has less viewport





Tech Stack - 
Static vs Dynamic
You can inspect without running and catch error at design time


Database
- horizontal scaling for NoSQL, expecting so much visitors, wants realtime update, 


Languages
“Java is dead, but the JVM lives on”. This has fuelled the adoption of languages like Scala that runs on top of the JVM and can still take advantage of third party libraries. Java can also be resource-intensive, requiring more memory for example, as compared to other language. Java is used for Android devices and should be considered if that platform is part of your rollout strategy.


Python 
- is an open source interpretive language 
- has good support for data science and machine learning with large set of scientific libraries
- it can be scaled horizontally.


PHP 
- has a vast ecosystem of developers
- easy and vast hosting support
- prone to spagetti code

Statically compiled and strongly typed
- compile time errors  rather than run time errors

Problem Domain
Some languages are clearly more suitable for solving different problems, which can make the decision process more straightforward. For example, if you are integrating heavily with MS Office and other Windows applications, then you should consider .NET on your list of possible choices. If you are performing functions, such as forecasting weather patterns, Python might be a better option because of its precise math libraries and ability to scale well with Hadoop. If enterprise level security for a business-to-business application is critical; you will likely want to explore using Java. In any case, your evaluation will need to take into account the problems you need to address as well as your business case and type of customers.




Cohesion refers to what the class (or module) can do. Low cohesion would mean that the class does a great variety of actions - it is broad, unfocused on what it should do. High cohesion means that the class is focused on what it should be doing, i.e. only methods relating to the intention of the class.

Example of Low Cohesion:

-------------------
| Staff           |
-------------------
| checkEmail()    |
| sendEmail()     |
| emailValidate() |
| PrintLetter()   |
-------------------
Example of High Cohesion:

----------------------------
| Staff                   |
----------------------------
| -salary                 |
| -emailAddr              |
----------------------------
| setSalary(newSalary)    |
| getSalary()             |
| setEmailAddr(newEmail)  |
| getEmailAddr()          |
----------------------------
As for coupling, it refers to how related or dependent two classes/modules are toward each other. For low coupled classes, changing something major in one class should not affect the other. High coupling would make it difficult to change and maintain your code; since classes are closely knit together, making a change could require an entire system revamp.