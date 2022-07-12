//Classe
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    speakAboutYou() {
        console.log(`Hello! I am ${this.name}, I have ${this.age} years and I was born in ${this.getBirthYear()}.`)
    }

    getBirthYear() {
        return new Date().getFullYear() - this.age
    }
}

//Herança
class Client extends Person {
    constructor(name, age, cpf) {
        super(name, age)
        this.cpf = cpf
    }
}

class Admin extends Person {
    constructor(name, age, password) {
        super(name, age)
        this.password = password
    }

    speakAboutYou() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

const c1 = new Client("John", 20, 703560055)

const a2 = new Admin("Hugo", 30, 1234567789)

function explainPerson(p) {
    p.speakAboutYou()
}

// explainPerson(c1)

// explainPerson(a2)

//Static
class NossoMath {
    static PI = 3.14

    static pow(n, e) {
        return n ** e
    }
}