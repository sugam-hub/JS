var principle = parseInt(prompt("Enter principle:"));
var rate = parseInt(prompt("Enter rate:"));
var time = parseInt(prompt("Enter time:"));
var interest = (principle * rate * time) / 100;
document.write("The interest is " + interest+".");
