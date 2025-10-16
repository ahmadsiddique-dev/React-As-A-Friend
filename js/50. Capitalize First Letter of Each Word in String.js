// Write a JavaScript program to capitalize the first letter of each word in a given string.

function capitalize(a) {
  let res = a.split(" "),
    element = [];

  for (let i = 0; i < res.length; i++) {
    element.push(res[i].toUpperCase());
    // console.log(element);
  }

  return element.join(" ");
}

console.log(
  capitalize(
    "Write a JavaScript program to capitalize the first letter of each word in a given string."
  )
);
