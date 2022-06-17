const array1 = [1, 2, 3, 4, 5, 6]
const array2 = [2, 3, 4, 8, 9, 12]

const intersection = array1.filter(item => array2.includes(item))

console.log(intersection)