function nextInLine(arr, item) {
    
    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

document.write("Before: " + JSON.stringify(testArr) + "<br/>");
document.write(nextInLine(testArr,6) + "<br/>")
document.write("After: " + JSON.stringify(testArr) + "<br/>");