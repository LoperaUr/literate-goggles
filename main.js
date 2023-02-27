let trabajadores = [];
for (let i = 0; i < 5; i++) {
  let trabajador = prompt("Ingrese el nombre del trabajador: ");
  trabajadores.push(trabajador);
};


console.log('Recorrido con forEach');
trabajadores.forEach(element => {
  console.log(element);
});

console.log('Recorrido con for');
for (let i = 0; i < trabajadores.length; i++) {
  console.log(trabajadores[i]);
};
