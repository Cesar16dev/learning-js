// const d = document;

// const $body = d.querySelector("body");
// $body.innerHTML = `<h1>Hola Mundo</h1>`;

console.log("Hola Mundo !");

console.warn("Usted no es mayor de edad");

console.error("Error 404");

console.trace("¡He llegado aquí!");

const styles = `
  background:linear-gradient(#884ced, #22eeaa);
  color:#fff;
  padding: 5px 10px;
`;

const users = [
  { name: "Manz", role: "streamer", status: "happy" },
  { name: "BlurSoul_", role: "mod", status: "happy" },
  { name: "felixicaza", role: "mod", status: "happy" },
  { name: "pheralb", role: "mod", status: "porosad" },
];

console.table(users);
