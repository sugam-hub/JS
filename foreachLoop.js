const numbers = [10, 20, 30, 40, 50];

document.write("Double:"+"<br/>");
numbers.forEach(function (num) {
    document.write(num * 2 + "<br/>");
})

document.write("Triple:"+"<br/>");
function printTriple(n) {
    document.write(n * 3+"<br/>");
}

numbers.forEach(printTriple);

document.write("Index and Value:"+"<br/>");
numbers.forEach(function (num, idx) {
    document.write("The index is:"+idx, "The value is: "+num + "<br/>");
})