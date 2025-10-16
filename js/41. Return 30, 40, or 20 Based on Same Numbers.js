// Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.

function check(a, b, c) {

    if (a === b && b === c) return 30;

    else if (a === b || a === c || b === c) return 40;
    
    else return 20;
}

console.log(check(10, 20, 0));
console.log(check(15, 15, 0));
console.log(check(10, 10, 10));