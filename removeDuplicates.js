const removeDuplicates = (inputArray) => {
 let uniqueValues = []
for(let i = 0; i < inputArray.length; i++)
{
if(!uniqueValues.includes(inputArray[i])) {
uniqueValues.push(inputArray[i])
}
}
return uniqueValues
}

let arr = [2,4,5,2,4,9,5];

console.log(removeDuplicates(arr))