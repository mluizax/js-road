function getDif() {
    const array1 = [1, 2, 3, 4, 5, 6]
    const array2 = [2, 3, 4, 8, 9, 12]

    let onlyArray1 = array1.filter(function (item) {
        if (array2.indexOf(item) == -1)
            return item;
    });

    let onlyArray2 = array2.filter(function (item) {
        if (array1.indexOf(item) == -1)
            return item;
    });

    let difTotal = onlyArray1.concat(onlyArray2);

    return difTotal
}

console.log(getDif())