const yargs = require('yargs');

const argv = yargs(process.argv)
    .options({'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Base de la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            demandOption: true,
            describe: 'Muestra la tabla en consola'      
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: 10,
            demandOption: true,
            describe: 'Límite de la tabla de multiplicar'      
        },
        'c': {
            alias: 'crear',
            type: 'boolean',
            default: false,
            demandOption: true,
            describe: 'Crea un archivo con la tabla de multiplicar'      
        },
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }
        if (isNaN(argv.h)) {
            throw 'El límite tiene que ser un número';
        }
        if (argv.l !== true && argv.l !== false) {
            throw 'El valor de listar tiene que ser true o false';
        }
        if (argv.c !== true && argv.c !== false) {
            throw 'El valor de crear tiene que ser true o false';
        }
        return true;

    })
    .argv;

module.exports = argv;