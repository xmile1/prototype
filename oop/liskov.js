// Child classes should never break the parent class' type definitions.
// a subclass should override the parent class' methods in a way that does not break functionality from a client's point of view.

// Stc are Fellows they have names and surnames, they have levels and Frameworks, you can get their info

class BadFellow {
    constructor(name, surname, framework) {
        this.name = name
        this.surname = surname
        this.framework = framework
    }

    getFullName() {
        return `${this.surname}, ${this.name}`
    }

    setCohort(cohort) {
        this.cohort = cohort
    }

    setLevel(level) {
        this.level = level
    }

    getInfo(){
        const fullNames = this.getFullName()
        return `${fullNames} is in Cohort ${this.cohort} and Level ${this.level} and uses ${this.framework}`
    }

}

class BadStc extends BadFellow {
    setCohort(cohort){
        this.level = cohort
        this.cohort = cohort
    }
    setLevel(level){
        this.level = level
        this.cohort = level
    }
}

const newFellow = new BadFellow('John', 'Doe', 'Laravel')
newFellow.setCohort(20)
newFellow.setLevel(2)
console.log(newFellow.getInfo()) 

const newStc = new BadStc('Simon', 'Ashley', 'Echo')
newStc.setCohort(20)
newStc.setLevel(2)
console.log(newStc.getInfo()) // Client expect to see a string with different cohorts and level because he knows the base class works that way

// GOOD



class Staff {
    constructor(name, surname, framework) {
        this.name = name
        this.surname = surname
        this.framework = framework
    }

    getFullName() {
        return `${this.surname}, ${this.name}`
    }
   
}

class Fellow extends Staff {
    constructor(name, surname, framework, cohort, level) {
        super(name, surname, framework)
        this.level = level
        this.cohort = cohort
    }

    getInfo() {
        const fullNames = this.getFullName()
        return `${fullNames} is in Cohort ${this.chort} and Level ${this.level} and uses ${this.framework}`
    }

}

class Stc extends Staff {
    constructor(name, surname, framework, level){
        super(name, surname, framework)
        this.level = level
    }

    getInfo() {
        const fullNames = this.getFullName()
        return `${fullNames} is in Level ${this.level} and uses ${this.framework}`
    }
  
}


const fellow = new Fellow('John', 'Doe', 'MEAN', 20, 2)
console.log(fellow.getInfo())

const stc = new Stc('Sam', 'Solarin', 'PERN', 3)
console.log(stc.getInfo())