// Creates a new array with the results of calling the provided function on every element in the calling array.
const myMap = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  };

  console.log(myMap([1, 2, 3, 4], (num) => num * num)); // [1, 4, 9, 16]
  console.log(myMap([1, 2, 3, 4], (num) => num + 10)); // [11, 12, 13, 14]

//  Creates a new array with all elements that pass the test implemented by the provided function.

  const MyFilter = (arr, callback) => {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])){
            result.push((arr[i]))
        }
    }
    return result
  }

//    Executes a provided function once for each array element.
const myForEach = (arr, callback) => {
    for(let i = 0; i<arr.length; i++){
        callback(arr[i])
    }
    return arr
}