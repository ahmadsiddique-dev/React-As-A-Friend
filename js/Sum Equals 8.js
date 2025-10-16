// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.  

function check(a, b) {
    if ( a + b  === 8 || a - b === 8) {
        if ( (a === 8 && b === 0) || a === 0 && b === 8) {
            return "One of them is eight";
        }
        else {
            return "Sum or difference is eight";
        }
    }
}

console.log("Condition 1 : ", check(16, 8))
console.log("Condition 2 : ", check(8, 0))