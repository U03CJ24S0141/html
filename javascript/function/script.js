function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Prathap"));

// arrow function
const add = (a, b) => a + b;
console.log("Sum:", add(5, 7));

// side-effect function (no return)
function showMessage(msg) {
  console.log("MSG:", msg);
}
