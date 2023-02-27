let trabajadores = [];
for (let i = 0; i < 3; i++) {
  let nombre = prompt("Nombre del trabajador: ");
  let salario = prompt("Salario del trabajador: ");

  let trabajador = {
    nombre,
    salario
  }

  trabajadores.push(trabajador);

};

trabajadores.forEach(element => {
  console.log(element);
});