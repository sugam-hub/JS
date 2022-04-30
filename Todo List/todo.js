const input = document.getElementById("input");
const form = document.getElementById("form");
const list = document.querySelector("#list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var val= input
  createItem(input.value);
});
function createItem(item) {
  let html = `<li class="list-item" >${item} <button id="delete">Delete</button></li>`;
  list.insertAdjacentHTML("beforeend", html);
  input.value = "";
  input.focus();
}
