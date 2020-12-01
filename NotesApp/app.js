

const chalk = require('chalk');
const yargs = require('yargs');
const notesUtils = require('./notes.js')
console.log(yargs.argv)
//Changing Yargs version
yargs.version("1.1.0")

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            //demandOption:true obriga a fornecer um argumento se n não roda.
            //type:'string', Sempre string.
        },
        body:{
            type:'string',
            describe:'Note body',
            demandOption:true,
        }
    },
    handler: function(argv) {
       notesUtils.addNotes(argv.title, argv.body)
    }
})
//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(argv) {
        notesUtils.removeNotes(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function() {
        console.log("Title: "+ args.title)
    }
})
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log("Reading note")
    }
})

//USAR ISSO PARA QUE POSSA RODAR
yargs.parse()
//Com yargs posso usar o --tile=string e ele retorna  como variavel.





//Rodar node app.js  string . esse valor da string vai entrar no process.argv e posso usar para algo
// const command = process.argv[2]
// if (command == "add"){
//     console.log("Add note")
// }else if (command == "remove"){
//     console.log("Remove note")
// }
// //https://www.npmjs.com/package/chalk
// const log = console.log;

// log(chalk.green('Success'))
// log(chalk.green(
//     'I am a green line ' +
//     chalk.blue.underline.bold('with a blue substring') +
//     ' that becomes green again!'
// ));


// log(chalk.keyword('purple')('Yay for purple colored text!'));
// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// log(chalk.hex('#DEADED').bold('Bold gray!'));

// const error = chalk.bold.red;
// const warning = chalk.keyword('orange');
 
// log(error('Error!'));
// log(warning('Warning!'));

// const name = 'Sindre';
// log(chalk.green('Hello %s'), name);
// //=> 'Hello Sindre'

// log(chalk.bold("Bold"))
// log(chalk.inverse.blue("Inverse"))

// //const validator=require('validator')
// // notes = require('./notes');
// // mensagem = notes()
// // console.log(mensagem)
// // VALIDATOR TEM MUITAS COISAS NA PAGINA DO NPM
// ////console.log(validator.isEmail("thales@gmail.com"))
// //console.log(validator.isURL("https://brederodestore.herokuapp.com/"))
// // const add=require("./utils")
// // const valor = add(7, 11)
// // console.log(valor)


