web vs mobile
Move fast and break things

Mobile - 
now you have a lot less control over your update cycle, and so you have to think really differently about how frequently you can update.
Needs more developers for IOS and Android
Reaches more people..
Has less viewport
 - The reason a lot of people make native apps for phones is because on the phone, you can send push notifications. 
 You can get access to the camera with a native app. You can’t do that with a web app, 
 you won’t get as much reuse, 

 - Move fast and break things,” and I think that makes total sense when, if you break something, you can update the software on your own web server. It’s not quite that simple if you’re shipping an operating system to somebody’s data center that may get updated months or years later.






Static vs Dynamic
You can inspect without running and catch error at design time


Database
 - NoSQL
- horizontal scaling for NoSQL, expecting so much visitors, wants realtime update, 

Tech Stack - 
- Language Characteristics: 
- If you are developing for the cloud, stick with interpretative, dynamic, open source languages for rapid and more cost-effective development. 
- For enterprise applications that have critical security requirements or must integrate with legacy environments, compiled languages may be better.

• Problem Domain: Take a look what languages are being used to solve your similar business problems and what is supported by the expanse of libraries. Somebody might have already solved 80% of your problem and have a general license available for you to build on.
- eg python for data science apps

• Local Ecosystem: Research your local community to understand if you have a ready supply of skilled workers that can be tapped for affordable talent.
but I really think, at the end of the day, as engineers and product people, we have to be motivated by the person using our software,


Statically typed programming languages do type checking (the process of verifying and enforcing the constraints of types) at compile-time as opposed to run-time. e.g golang

Dynamically typed programming languages do type checking at run-time as opposed to Compile-time. e.g php, python, js, ruby.
In dynamic typing, types are associated with values not variables, 
Compared to static typing, dynamic typing can be more flexible (e.g. by allowing programs to generate types and functionality based on run-time data)

# Cohesion
 refers to what the class (or module) can do. Low cohesion would mean that the class does a great variety of actions - it is broad, unfocused on what it should do. High cohesion means that the class is focused on what it should be doing, i.e. only methods relating to the intention of the class.

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

## coupling, 
It refers to how related or dependent two classes/modules are toward each other. For low coupled classes, changing something major in one class should not affect the other. High coupling would make it difficult to change and maintain your code; since classes are closely knit together, making a change could require an entire system revamp.


https://towardsdatascience.com/10-common-software-architectural-patterns-in-a-nutshell-a0b47a1e9013







Java
- is dead, but the JVM lives on”. 
- This has fuelled the adoption of languages like Scala that runs on top of the JVM and can still take advantage of third party libraries. 
- Java can also be resource-intensive, requiring more memory for example, as compared to other language. 
- Java is used for Android devices and should be considered if that platform is part of your rollout strategy.
- strongly typed


Python 
- is an open source interpretive language 
- has good support for data science and machine learning with large set of scientific libraries
- it can be scaled horizontally.


PHP 
- has a vast ecosystem of developers
- easy and vast hosting support
- prone to spagetti code


Some languages are clearly more suitable for solving different problems, which can make the decision process more straightforward. For example, if you are integrating heavily with MS Office and other Windows applications, then you should consider .NET on your list of possible choices. If you are performing functions, such as forecasting weather patterns, Python might be a better option because of its precise math libraries and ability to scale well with Hadoop. If enterprise level security for a business-to-business application is critical; you will likely want to explore using Java. In any case, your evaluation will need to take into account the problems you need to address as well as your business case and type of customers.


