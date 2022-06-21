function pascal(value) {
    if (value === 0) {
        return []
    }
    if (value === 1) {
        return [[1]]
    }

    let result = []

    for (let i = 1; i <= value; i++) {
        let array = []
        for (let j = 0; j < i; j++) {
            if (j === 0 || j === i - 1) {
                array.push(1)
            }
            else {
                array.push((result[i - 2][j - 1] + result[i - 2][j]))
            }
        }
        result.push(array)

    }

    // console.log(result)

    let str = ``;

    result.forEach((row, index) => {
        for (let i = 0; i < result.length / 2 - index + result.length / 2; i++) {
            str += " "
        }

        str += row + "\n"
    })

    return str
}

console.log(pascal(10))