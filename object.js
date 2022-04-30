var myDog = {
    "name": "Husky",
    "legs": 4,
    "tail": 1,
    "friends": ["German Shepard"]
};

var petName = myDog.name;
var petFriends = myDog["friends"];
document.write(petFriends + "<br/>");
myDog.bark = "VOW-WOW";
document.write(myDog.bark);
delete myDog.tail;

