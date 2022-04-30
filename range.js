function Range(a, b) {
    return function (c) {
        if (c >= a && c <= b) {
            return "The number is in range.";
        } else {
            return "The number is not in range.";
        }
    }
}


const range = Range(0,30);
document.write(range(35) +  "<br/>");


