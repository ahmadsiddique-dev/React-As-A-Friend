let a = [2, 3, 4, 5, 6, 7], res = [];

a.reduce((e, c) => { 
  res.push(e * 2); 
  return c; 
}, a[0]); // initial value

console.log("Res : ", res);
// Output: [4, 6, 8, 10, 12, 14]
