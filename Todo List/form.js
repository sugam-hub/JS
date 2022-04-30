const result1 = document.querySelector("h1");
const result2 = document.querySelector("h2");
const result3 = document.querySelector("h3");
const result4 = document.querySelector("h4");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let text1 = document.querySelector('input[type="text"]');
  result1.innerHTML = text1.value;
});

btn.addEventListener("click", () => {
  let checkbox = document.querySelector('input[type="checkbox"]:checked');
  result2.innerText = checkbox.value;
});

// btn.addEventListener("click", () => {});
