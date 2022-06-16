const users = [
    {
        name: 'Maria Luíza',
        age: 22,
        weight: 50,
        sex: 'F'
    },
    {
        name: 'Carlos Alexandre',
        age: 50,
        weight: 70,
        sex: 'M'
    },
    {
        name: 'Lucas Gabriel',
        age: 14,
        weight: 62,
        sex: 'M'
    }
]

//1
function getMed(array) {
    let ageTotal = 0

    for (let i = 0; i < array.length; i++) {
        ageTotal += array[i].age
    }

    let med = ageTotal / array.length

    return med
}

// console.log(getMed(users))

function fat(array) {
    let fatinho = null

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i].weight > array[i + 1].weight) {
            array[i].weight = fatinho
            fatinho = array[i].name
        }
    }

    return fatinho
}

// console.log(fat(users))


// function treat(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].sex === 'F') {
//             array[i].name = 'Sra.' + ' ' + array[i].name
//         }
//         else {
//             array[i].name = 'Sr.' + ' ' + array[i].name
//         }
//     }
//     return array
// }

// treat(users)

// console.log(users)

function treat(array) {
    const newUsers = array.map((item) => {
        if (item.sex === 'F') {
            return { ...item, name: 'Sra. ' + item.name }
        }
        return { ...item, name: 'Sr. ' + item.name }
    })
    return newUsers
}

// console.log(treat(users))


// function gender(array, sex) {
//     const usersNew = array.filter((item) => {
//         if (item.sex === sex) {
//             return true
//         }
//         return false
//     })
//     return usersNew
// }

// console.log(gender(users, 'F'))


function smartGender(array, sex) {
    const usersNew = array.filter((item) => {
        return item.sex === sex
    })
    return usersNew
}

console.log(smartGender(users, 'M'))