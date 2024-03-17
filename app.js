// const d = document;

// const $body = d.querySelector("body");
// $body.innerHTML = `<h1>Hola Mundo</h1>`;

// Trabajando y conociendo el console
console.log("Hola Mundo !");

console.warn("Usted no es mayor de edad");

console.error("Error 404");

console.trace("¡He llegado aquí!");

const styles = `
  background:linear-gradient(#884ced, #22eeaa);
  color:#fff;
  padding: 5px 10px;
`;

console.log("%cHola Mundo", styles);

const users = [
  { name: "Manz", role: "streamer", status: "happy" },
  { name: "BlurSoul_", role: "mod", status: "happy" },
  { name: "felixicaza", role: "mod", status: "happy" },
  { name: "pheralb", role: "mod", status: "porosad" },
];

//console.table(users);

// Trabajando y conociendo los tipos de funciones

// Funciones por declaración
function saludar() {
  return "Hola soy una funtion declarada";
}
//console.log(saludar());
//console.log(typeof saludar);

//Funcion por expresion
const saludo = function () {
  return "Hola soy una function por expresion!";
};

//console.log(saludo());

//Funciones como objetos
const saludando = new Function("return 'Hola soy una funcion como objeto';");
//console.log(saludando());

// Función anónima "saludo"
const anonimo = function () {
  return "Hola soy una function anonima";
};
//console.log(anonimo());

// Callbacks
// fB = Función B
const fB = function () {
  //console.log("Función B ejecutada.");
};

// fA = Función A
const fA = function (callback) {
  callback();
};

fA(fB);

//Ejemplos con callbacks

const fc = function () {
  //console.log("Función B ejecutada.");
};

const fError = function () {
  //console.error("Error");
};

const fCb = function (callback, callbackError) {
  const n = ~~(Math.random() * 5);
  if (n > 2) callback();
  else callbackError();
  //console.log(n);
};

fCb(fc, fError);

//Funciones autoejecutables
(function () {
  //console.log("Hola soy una function autoejecutable!!");
})();

(function (name) {
  //console.log(`¡Hola, ${name}!`);
})("Cesar");

const input = document.querySelector("input"),
  submit = document.querySelector("button"),
  message = document.getElementById("message");

let attempt = 0;
let mysteriousNumber = getNumberRandom();
console.log("Numero random", mysteriousNumber);

submit.addEventListener("click", function () {
  if (input.value === mysteriousNumber) alert("Ganaste!");
  ++attempt;
  console.log(attempt);
});

function getNumberRandom() {
  let num = Math.round(Math.random() * 100);
  return num;
}

console.log(getNumberRandom());
