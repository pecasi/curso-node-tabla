// const fs = require('fs');
const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

crearArchivoTabla(argv)
    .then(nombreArchivo => {
        if (argv.c){
            console.log(`${colors.underline('Archivo creado:')} ${colors.bold(nombreArchivo)}`);     
        }
    })
    .catch(err => console.log(err));