class BadAdapterJSON {
    constructor(){
        this.type = 'JSON'
    }
}

class BadAdapterHTML {
    constructor(){
        this.type = 'HTML'
    }
}

class BadResultPrinter {

    constructor(adapter){
        this.adapter = adapter
    }

    print() {
        if (this.adapter.type === 'JSON'){
            return printJSON()
        }
        else if(this.adapter.type === 'HTML'){
            return printHTML()
        }

    }
}

function printJSON() {
    console.log("This is an HTML Print")
}

function printHTML() {
    console.log("This is a JSON Print")
}


// Open and Close Principle Good

class AdapterJSON {
    constructor() {
        this.type = 'JSON'
    }

    print() {
        console.log("This is an JSON Print")
    }
}

class AdapterHTML {
    constructor() {
        this.type = 'HTML'
    }

    print() {
        console.log("This is a HTML Print")
    }


}

class ResultPrinter {

    constructor(adapter) {
        this.adapter = adapter
    }

    print() {
        this.adapter.print()
    }
}


const jsonAdapter = new AdapterJSON()
const htmlAdapter= new AdapterHTML()
const htmlPrinter = new ResultPrinter(htmlAdapter)
const jsonPrinter = new ResultPrinter(jsonAdapter)
htmlPrinter.print()
jsonPrinter.print()

// Extend and add a YAML printer


class AdapterYAML {
    constructor() {
        this.type = 'YAML'
    }

    print() {
        console.log("This is an YAML Print")
    }
}

const yamlAdapter = new AdapterYAML()
const yamlPrinter = new ResultPrinter(yamlAdapter)
yamlPrinter.print()