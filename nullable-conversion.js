function convertNullableValues(obj){
    let modifiedObj = {}
    for(const key in obj){
        if(obj.hasOwnProperty(key)) {
            // let value = obj[key]
            if(obj[key]=== null){
                modifiedObj[key] = 0
            } else if (obj[key] === undefined){
                modifiedObj[key] = "";
            } else {
                modifiedObj[key] = obj[key];
            }
        }
    }
return modifiedObj
}

let obj = { x: 5, y: null, z: undefined, a: 10 }
console.log(convertNullableValues(obj))

