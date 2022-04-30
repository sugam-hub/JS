function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true!!";
    }
    return "No, it's false!!";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, it was true!!";
    }
    return "No, it was false!!";
}

document.write(trueOrFalse(false)+"<br/>");
document.write(ourTrueOrFalse(true));