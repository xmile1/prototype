// DIP keeps high - level modules from knowing the details of its low - level modules and setting them up.
//It can accomplish this through DI.A huge benefit of this is that it reduces the coupling between modules.
// Coupling is a very bad development pattern because it makes your code hard to refactor.





class BadFormatter {

    formatDocument(document) {
        console.log("I have formatted it to Markdown")
    }
}

class BadPrinter {
    constructor(document) {
        this.document = document

        this.formatter = new Formatter()
    }

    printDocument() {
        this.formatter.formatDocument(this.document)
    }
}



// This reduce the coupling between the classes, 
// It also makes testing easier, since we can easily mock the formatter class 

class MarkdownFormatter {

    formatDocument(document) {
        console.log(`I have formatted ${document} in Markdown`)
    }
}
class YamlFormatter {

    formatDocument(document) {
        console.log(`I have formatted ${document} in Yaml`)
    }
}

class Printer {
    constructor(document, formatter) {
        this.document = document
        this.formatter = formatter
    }

    printDocument() {
        this.formatter.formatDocument(this.document)
    }
}

let markdownPrint = new Printer('Hello Andela', new MarkdownFormatter())
markdownPrint.printDocument()
markdownPrint = new Printer('Hello Andela', new YamlFormatter())
markdownPrint.printDocument()