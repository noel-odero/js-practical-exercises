function validatePhoneNumber(num) {
    let regex = /^\d{3}[- ]?\d{3}[- ]?\d{4}$/
    return regex.test(num)
}


console.log(validatePhoneNumber("1234567890"));    // true
console.log(validatePhoneNumber("123-456-7890"));  // true
console.log(validatePhoneNumber("123 456 7890"));  // true
console.log(validatePhoneNumber("123-45-67890"));  // false
console.log(validatePhoneNumber("1234-567890"));   // false