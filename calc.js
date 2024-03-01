const chalk = require('chalk')
const inquirer = require('inquirer')

//criando função para soma
function somar(n1, n2) {
    return n1 + n2;
}

//criando função para subtrair
function subtrair(n1, n2) {
    return n1 - n2;
}

//criando função para multiplicar
function multiplicar(n1, n2) {
    return n1 * n2;
}

//criando função para dividir 
function dividir(n1, n2) {
    return n1 / n2;
}

function main() {
    console.log(chalk.bgMagenta('Hello! Seja Bem-Vindo'))

    //perguntando dois números ao usuário
    inquirer.prompt([
        {
            name: 'num1',
            message: 'Digite o primeiro número'
        },
        {
            name: 'num2',
            message: 'Digite o segundo número'
        }
    ])
    .then((resposta) => {
        //convertendo para valores numéricos
        const num1 = Number(resposta.num1);
        const num2 = Number(resposta.num2);

        //somando
        const resultSoma = somar(num1, num2);
        //subtraindo
        const resultSubtrai = subtrair(num1, num2);
        //multiplicando
        const resultMultiplica = multiplicar(num1, num2);
        //dividindo
        const resultDivide = dividir(num1, num2)

        //imprimindo
        console.log(chalk.bgMagenta(`A soma de ${num1} + ${num2} = ${resultSoma}`))
        console.log(chalk.bgGreen(`A subtração de ${num1} - ${num2} = ${resultSubtrai}`))
        console.log(chalk.bgBlue(`A multiplicação de ${num1} * ${num2} = ${resultMultiplica}`))
        console.log(chalk.bgCyan(`A divisão de ${num1} / ${num2} = ${resultDivide}`))

    })
}

main();