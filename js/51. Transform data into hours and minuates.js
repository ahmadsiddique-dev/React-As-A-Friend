// Write a JavaScript application that transforms a provided numerical value into hours and minutes.

function time_convert(time) {
  const dateFromTimestamp = new Date(time); // Example timestamp

  console.log(
    `\t${dateFromTimestamp.getHours()} : ${dateFromTimestamp.getMinutes()}`
  );
}

console.log(time_convert(71));
console.log(time_convert(450));
console.log(time_convert(1441));
