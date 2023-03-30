import * as chalk from "chalk"

console.log(chalk.blue("¡Hola, mundo!"));
console.log(chalk.red.bold("Este texto está en negrita y rojo"));

const message = chalk.bgYellowBright.black("Este mensaje tiene un fondo amarillo brillante y texto negro.");
console.log(message);