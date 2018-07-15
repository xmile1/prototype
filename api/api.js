//  a set of public methods and properties that it uses to interact with other objects in your application.


// REST is better than SOAP

// REST allows a greater variety of data formats, whereas SOAP only allows XML.
// Coupled with JSON(which typically works better with data and offers faster parsing), REST is generally considered easier to work with.
// Thanks to JSON, REST offers better support for browser clients.
// REST provides superior performance, particularly through caching for information that’s not altered and not dynamic.
// It is the protocol used most often for major services such as Yahoo, Ebay, Amazon, and even Google.
// REST is generally faster and uses less bandwidth.It’s also easier to integrate with existing websites with no need to refactor site infrastructure.This enables developers to work faster rather than spend time rewriting a site from scratch.Instead, they can simply add additional functionality.



// SOAP works well with firewalls ?



// API best practices
// 1. Use nouns but no verbs
// 2. GET method and query parameters should not alter the state
// 3. Use plural nouns
// 4. Use sub - resources for relations   GET / cars / 711 / drivers / Returns a list of drivers for car 711
// 5. Use HTTP headers for serialization formats
// Both, client and server, need to know which format is used for the communication.The format has to be specified in the HTTP - Header.
//     Content - Type defines the request format.
// Accept defines a list of acceptable response formats.
// 6. Provide filtering, sorting, field selection and paging for collections
    // GET / cars ? seats <= 2 Returns a list of cars with a maximum of 2 seats
    // GET / cars ? sort = -manufactorer, +model
    // GET / cars ? fields = manufacturer, model, id, color
    // GET / cars ? offset = 10 & limit=5
// 8. Version your API
// 9. Handle Errors with HTTP status codes

