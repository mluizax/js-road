const person = {
    name: "Joao"
}

//Passagem por valor e passagem por referencia
function alteraValor(obj) {
    obj.age = 20
}

// alteraValor(person)

// console.log(person)

//Mudança por referencia
// const personClone = person

// personClone.age = 20;

//Spread

const obj = { name: "joao", address: { street: 'rua' } }

const obj2 = { age: 20 }

const obj3 = {
    ...obj, //{ name: "joao", address: { street: 'rua' } }
    ...obj2, //{ name: "joao", address: { street: 'rua' }, age: 20 }
    address: { ...obj.address } //{ name: "joao", address: { street: 'rua' }, age: 20 } 
}

obj3.address.street = "rua camomila"

const array1 = [20]

const array2 = [...array1]

array2.push(30)