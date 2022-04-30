function multiplyBy(num) {
    return function (x) {
        return x * num;
    }
}

const triple = multiplyBy(4);
document.write(triple(3) +  "<br/>");

const double = multiplyBy(5);
document.write(double(2));