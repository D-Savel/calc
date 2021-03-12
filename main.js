const readlineSync = require('readline-sync')
const chalk = require('chalk')
const { calc } = require('./calc')

//Demander l'opération
const op = readlineSync.question('Opération: ')

//Demander nb1
let nb1 = readlineSync.question('nb1: ')
nb1 = Number(nb1)

//Demander nb1
let nb2 = readlineSync.question('nb2: ')
nb2 = Number(nb2)

console.log(chalk.green.bold(calc(op, nb1, nb2)))
