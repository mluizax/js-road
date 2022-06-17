function getDif() {
    const array1 = [1, 2, 3, 4, 5, 6]
    const array2 = [2, 3, 4, 8, 9, 12]

    let array3 = array1.filter(item => !array2.includes(item))
    let array4 = array2.filter(item => !array1.includes(item))


    console.log([...array3, ...array4])
}

getDif()