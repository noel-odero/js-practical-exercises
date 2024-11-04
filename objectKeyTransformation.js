function transformKeys(obj,transformFunc){
    let modifiedObj = {}
    for (const key in obj){
        if(obj.hasOwnProperty(key)){
        //   let uppercaseKey = key.toUpperCase()
let transformedValue = transformFunc(key)
          modifiedObj[transformedValue] = obj[key]
        }
    }
    return modifiedObj;
}

const inputObject = {
    FIRSTNAME: "John",
    LASTNAME: "Doe",
    AGE: 30,
  };
const toLowerCs = (val) => val + " " + 'Eldrige'

console.log(transformKeys(inputObject, toLowerCs))