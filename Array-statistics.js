function arrayStats(arr) {
    let sum = 0
    for(i = 0; i<arr.length; i++){
        sum += arr[i]

    }
    let average = sum / arr.length
    const min = Math.min(...arr)
    const max = Math.max(...arr)

    return {
        sum: sum,
        average: average,
        min: min,
        max: max
    }

}
let num = [1, 3, 5, 78, 6];
console.log(arrayStats(num))