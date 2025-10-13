
const target = 'Sunday'
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

for(let year = 2011; year < 2050; year++) {
    let date = new Date(year, 0, 1).getDay()
    if(days[date] === target) {
        console.log(year,"it is sunday");
    }
    else {
        "notiing"
    }
}