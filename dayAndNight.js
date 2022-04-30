const date = new Date();
const hours = date.getHours();
let timeOfDay;


if (hours < 12) {
    timeOfDay = "Morning";
} else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon";
} else {
    timeOfDay = "Night";
}

document.write("It's " + "" + timeOfDay);