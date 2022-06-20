const five = 5
const array = [10, 23, 25, 10, 54, 125]

function getMult(array, multi) {
    const onlyMulti = array.filter((item) => {
        return item % multi === 0
    })
    return onlyMulti
}

console.log(getMult(array, five))