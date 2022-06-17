// let celsius = 5*(fahrenheit - 32) / 9
// let fahrenheit = (9*celsius/5) + 32 

const array = [40, 30, 25, 50]

function changeTemp(array) {
    const fahrenheit = array.map((item) => {
        return (9 * item / 5) + 32
    })
    return fahrenheit
}

console.log(changeTemp(array))