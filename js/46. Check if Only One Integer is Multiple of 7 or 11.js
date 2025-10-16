// Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11. 


function check (a, b) {
    if ((a % 7 === 0 && b % 7 === 0) || a % 11 === 0 && b % 11 === 0) return false;
    return (a % 7 === 0 || b % 7 === 0 || a % 11 === 0 || b % 11 === 0 ? true :  false)
}

console.log(check(43, 49))