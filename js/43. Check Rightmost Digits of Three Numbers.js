// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.\


// By the way I dont want to go with the % one approach instead try a different one
function check(a, b, c) {
    let  x = JSON.stringify(a)
    let  y = JSON.stringify(b)
    let  z = JSON.stringify(c)

    if (x[x.length - 1] === y[y.length - 1] && x[x.length - 1] === z[z.length - 1]) return true;

    else if (x[x.length - 1] === y[y.length - 1] ||  x[x.length - 1] === z[z.length - 1] || y[y.length - 1] === z[z.length - 1]) return true;

    return false;
}


console.log(check(343, 343, 22)) 
console.log(check(343, 332, 22)) 
console.log(check(345, 343, 22)) 