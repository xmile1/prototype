// /.+\.invisionapp\.com|.+\.invision\.works|.+\.invisionbeta\.com/g
// there is also a common sanitize regex used

// https://www.rapid7.com/fundamentals/cross-site-scripting/

// WAYS APPS CAN BE VULNURABLE
// when user pass a url to the addon, our API takes the url 
// and looks it up on the internet, then returns the data gotten to the client
// If a client was given a non company url by an hacker
// the client will use the url on our trusted trello addon and that will call the hackers url 
// which will return the relevant data correctly and the my company returns a prototype image and other data, 
// but this data will be coming from the hacker and could container malicious code.
// cross Scripting Attacks - user passes a url that returns a script that is executed on the user's browser
// Phishing attacks - the script executed might be requesting sensitive information and a trusting client might provide such

// input that allows data to be passed into the Db without sanitizing SQL Injection
const getUserData = async (userId) => {
   const userData = await `SELECT username, email FROM User where userId=${userId}`
   return userData
}

getUserData(`001; SELECT * FROM User where userId=001`) // this will get other data


// Use https://github.com/ded/express-limiter for rate limiting to prevent DDOS

// Authentication is the process of ascertaining that somebody really is who he claims to be.
const authenticate = (credentials)=>{
    const database = [{
        name: 'John',
        password: 'Doe',
        clearanceLevel: '2'
    }]
    const {name, password} = credentials
    const isAuthenticated = database.filter(data => data.name === name && data.password === password)

    // Allow the user access  to the app if authenticated
    return isAuthenticated.length === 1
}

// Authorization refers to rules that determine who is allowed to do what.
// E.g.Adam may be authorized to create and delete databases, while Usama is only authorised to read.
const authorize = (credentials)=>{
    const database = [{
        clearanceLevel: '2'
    }]
    const { clearanceLevel } = credentials
    const isCleared = database.filter(data => data.clearanceLevel <= clearanceLevel)

    if (isCleared.length){
        // Allow the user to Delete other users
        return true
    }

    // Allow the user to only View other users
    return false
}



hashing 
const hash = (data) => {
    return scrambleTheDataForever(data, salt)
}

const hashCompare = (originalHash, data) => {
    const camparedHash = scrambleTheDataForever(data, salt)
    return camparedHash === originalHash
}


const encrypt = (message) => {
    return encryptor(message, publicKey)
}

const decrypt = (encryptedMessage) => {
    return decryptor(encryptedMessage, privteKey) // returns original message
}



// Types of Cybersecurity Attacks
// Common Types of Cybersecurity Attacks
// Phishing Attacks
// SQL Injection Attacks(SQLi)
// Cross - Site Scripting(XSS)
// Man -in -the - Middle(MITM) Attacks
// Malware Attacks
// Denial - of - Service Attacks
// Spear Phishing Attacks
// Whaling Phishing Attacks
// Brute - Force and Dictionary Attacks