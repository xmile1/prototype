// AssessMe Anti Single Responsibility Principle
class AssessMeNoSRP {
    static assess(fellows){
        return fellows.map((fellow)=>{
            const fellowName = `${fellow.surname.toUpperCase()}, ${fellow.name}`
            return `${fellowName} scored ${Math.floor(Math.random() * 100)} `
        })
    }
}



// AssessMe Refartored to SRP

class AssessMe {
    static assess(fellows) {
        return fellows.map(fellow => ({...fellow, score: Math.floor(Math.random() *100)}))
    }
}

class Formatter {
    static fullNames(fellow) {
        return `${fellow.surname.toUpperCase()}, ${fellow.name}`
    }
}

class Outputter {
    constructor(formatter = Formatter){
        this.formatter = formatter
    }

    JSON (fellows) {
        return fellows.map((fellow) => {
            const fellowFullName = this.formatter.fullNames(fellow)
            return `${fellowFullName} scored ${fellow.score} `
        })
    }

    HTML (fellows) {
        const htmlFellow = fellows.map((fellow) => {
            const fellowFullName = this.formatter.fullNames(fellow)
            return `<p>${fellowFullName} scored ${fellow.score}</p>`
        })
        return `<div>${htmlFellow.join('')}</div>`
    }
}


const fellows = [
    {name: 'John', surname: 'Doe'},
    {name: 'Simon', surname: 'Woods'}
]

const assessment = AssessMe.assess(fellows)
console.log(assessment, "assessment")
const output = new Outputter()

console.log(output.JSON(assessment))
console.log(output.HTML(assessment))