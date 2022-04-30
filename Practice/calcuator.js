let screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");
let screenValue = "";

buttons.forEach((element) => {
  element.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    // console.log(buttonText);
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screen.value = "";
      screenValue = "";
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
      // } else if (buttonText == "del") {
      //   e.target.innerText.remove();
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
});
