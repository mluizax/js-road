const planetsInKm = [
    {
        name: 'Marte',
        distance: 227940000
    },
    {
        name: 'Saturno',
        distance: 1429400000
    },
    {
        name: 'Netuno',
        distance: 4504300000
    },
    {
        name: 'Terra',
        distance: 149600000
    },
    {
        name: 'Vênus',
        distance: 108200000
    },
    {
        name: 'Mercúrio',
        distance: 57910000
    },
    {
        name: 'Júpiter',
        distance: 778330000
    },
    {
        name: 'Urano',
        distance: 2870990000
    },
]


planetsInKm.sort(function (planetOne, planetTwo) {
    return planetOne.distance < planetTwo.distance
})

console.log(planetsInKm)


function transform(array) {
    let newDistance = array.map(valorAtual => {
        let planets = {}
        planets.name = valorAtual.name
        planets.distance = (valorAtual.distance / 1000) // transformando km em m
        return planets
    })
    console.log(newDistance)
}

transform(planetsInKm)