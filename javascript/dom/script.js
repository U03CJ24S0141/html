<!doctype html>
<html>
<head><meta charset="utf-8"><title>Step 6 - DOM</title></head>
<body>
  <h1 id="title">Welcome</h1>
  <button id="textBtn">Change Text</button>
  <button id="colorBtn">Change Color</button>

  <script src="script.js"></script>
</body>
</html>
step6-dom/script.js
// safe because script placed after elements
const title = document.getElementById("title");
const textBtn = document.getElementById("textBtn");
const colorBtn = document.getElementById("colorBtn");

textBtn.addEventListener("click", () => {
  title.innerText = "Hello Engineer!";
});

colorBtn.addEventListener("click", () => {
  title.style.color = "blue";
});
