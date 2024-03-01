const chalk = require('chalk')
const inquirer = require('inquirer')

//função principal que executa
function main() {
    console.log('Hello');
    console.log(chalk.bgBlueBright('Bem-Vindo ao Questionário!'));

    //perguntando o nome do usuário
    inquirer.prompt({
        name: 'name',
        message: 'Informe seu nome:'
    })
    //promise - javascript
    .then((nomeResponder) => {
        //pergunta a idade do usuário
        return inquirer.prompt({
            name: 'age',
            message: 'Informe sua idade:'
        })
        .then((idadeResponder) => {
            //imprimindo mensagem na tela
            console.log(chalk.bgBlueBright(`Hello ${nomeResponder.name}!! Você tem ${idadeResponder.age} anos!`))
        })
    })
}

main();