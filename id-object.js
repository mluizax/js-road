const people = [{ name: 'João' }, { name: 'Mary' }, { name: 'Raphael' }]

function addId(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].id = (i + 1)
    }
    console.log(array)
    array.forEach(item => {
        console.log(`{id: ${item.id}, name: "${item.name}"}`)
    })
}

addId(people)