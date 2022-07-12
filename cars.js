class Car {
    constructor(name, gasMax, speedMax) {
        this.name = name
        this.gasMax = gasMax
        this.speedMax = speedMax
    }

    kmPerLiter() {
        let distance = null
        let liter = null
        const yieldPerLiter = distance / liter
        return yieldPerLiter
    }
}

class Picape extends Car {
    kmPerLiter() {
        const yieldPerLiter = 100 + 'km/litro'
        return yieldPerLiter
    }
}

class Caminhao extends Car {
    kmPerLiter() {
        const yieldPerLiter = 50 + 'km/litro'
        return yieldPerLiter
    }
}

const pic1 = new Picape('Piripaque', 150, 220)

const pic2 = new Picape('Piporoca', 100, 250)

const cam1 = new Caminhao('Sapirole', 120, 160)

const array = [pic1, pic2, cam1]

array.forEach(item => {
    console.log(item.kmPerLiter())
})