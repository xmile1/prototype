class BadFellow {
    constructor(settings){
        this.settings = settings
        this.setUp()
    }

    setUp(){
        this.fullNames = this.settings.fullNames
        this.language = this.settings.language
        this.settings.createJsRepo()
    }

    tour(){
        // tour the world
    }

    
}


const badFellow = new BadFellow({
    fullNames: 'John Doe',
    language: 'Golang',
    createJsRepo(){} // Not everyone needs a JS repo 
})



class Fellow {
    constructor(settings) {
        this.settings = settings
        this.options = settings.options
        this.setup()
    }

    setup() {
        this.fullNames = this.settings.fullNames
        this.language = this.settings.language
        this.setupOptions();
    }

    setupOptions() {
        if (this.options.createJsRepo) {
            this.options.createJsRepo()
           
        }
    }

    tour() {
        // tour the world
    }


}



const fellow = new Fellow({
    fullNames: 'John Doe',
    language: 'Golang',
    options:{
        createJsRepo() { 
            console.log('Repo Created in Jupiter')
        }
    }
})


const shapeInterface = (state) => ({
    type: 'shapeInterface',
    area: () => state.area(state),
    volume: () => state.volume(state)
})

const shapeInterface = (state) => ({
    type: 'shapeInterface',
    area: () => state.area(state)
})
const solidShapeInterface = (state) => ({
    type: 'solidShapeInterface',
    volume: () => state.volume(state)
})