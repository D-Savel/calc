const chalk = require('chalk')
const { calc } = require('./calc')
const readlineSync = require('readline-sync')

//Demander l'opération
const operatorString = readlineSync.question('Ecrire votre Opération (number opérateur(+-*/modulo) nombre, ex 3/2: ')

//Assigner nb1 ,op et nb2
let listevar = operatorString.split('')
let [nb1, op, nb2] = listevar
nb1 = Number(nb1)
nb2 = Number(nb2)

console.log(chalk.green.bold(calc(op, nb1, nb2)))
