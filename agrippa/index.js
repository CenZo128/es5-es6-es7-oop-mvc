class Army {
    constructor(name, level, type) {
        this.name = name;
        this.level = level || 1
        this.type = type;
    }
    talk() {
        console.log(`Hello, i'm ${this.name}, type : ${this.type}, and level : ${this.level}`)
    }
    training() {
        this.level < 10 ? this.level++ : console.log("Sudah level 10!")
    }
}

class Knight extends Army {
    constructor(name, level) {
        super(name, level, "Knight")
    }
    talk(){
        super.talk()
        console.log("And I'm Knight!")
    }
}
class Spearman extends Army {
    constructor(name, level) {
        super(name, level, "Spearman")
    }
    talk(){
        super.talk()
        console.log("And I'm Spearman!")
    }
}
class Archer extends Army {
    constructor(name, level) {
        super(name, level, "Archer")
    }
    talk(){
        super.talk()
        console.log("And I'm Archer!")
    }
}
//Factory Class
class Barrack {
    constructor(armies){
        this.armies = armies || []
    }
    recruit(army){
        const { name, level, type } = army
        this.armies.push({
            name,
            level,
            type
        })
    }
    summon(){
        console.log(this.armies)
        // todos.forEach(todo => {
        //     const { id, task, done } = todo;
        //     done ? console.log(`${id}. ${task} [X]`) : console.log(`${id}. ${task} []`)
        // })
    }
    disband(name){
        this.armies = this.armies.filter(army => army.name !== name)
    }
    groupArmies(){
        let knights = []
        let spearmans = []
        let archers = []

        this.armies.forEach(army => {
            if(army.type === "Knight"){
                knights.push({
                    name : army.name,
                    level : army.level
                })
            }else if(army.type === "Spearman"){
                spearmans.push({
                    name : army.name,
                    level : army.level
                })
            }else if(army.type === "Archer"){
                archers.push({
                    name : army.name,
                    level : army.level
                })
            }
        })
        console.log({
            knights, spearmans, archers
        })
    }
}

let barrack = new Barrack()
let knight1 = new Knight("Arthas",25);
let spearman1 = new Spearman("Huskar",15);
let archer1 = new Archer("Drow Ranger",17);

// barrack.summon()
barrack.recruit(knight1)
barrack.recruit(spearman1)
barrack.recruit(archer1)
// barrack.summon()
// barrack.disband("Huskar")
// barrack.summon()
barrack.groupArmies()
