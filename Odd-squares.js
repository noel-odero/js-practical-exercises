function oddSquares(arr){
    return arr.filter((num) => num % 2 !== 0).map((num) => num * num)
}

let arr = [2, 5, 7, 8, 10]
console.log(oddSquares(arr))