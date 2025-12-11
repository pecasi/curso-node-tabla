const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async (argv) => {
    try {
        let salida = ''; 
        let consola = ''; 
        let caracterAdorno = '='; 
        let adornoCabecera ='';

        const textocabecera = `   ${colors.cyan('Tabla de multiplicar del')} ${colors.bold(colors.red(argv.b))} ${colors.cyan('hasta')} ${colors.bold(colors.red(argv.h))} \n`;
        const textocabeceraConsola = `  Tabla de multiplicar del ${argv.b} hasta ${argv.h} \n`;
        for (let i = 0; i < textocabeceraConsola.trim().length + 6; i++) {
            adornoCabecera += caracterAdorno;
        }       

        salida += `${adornoCabecera.magenta}\n`;
        consola += `${adornoCabecera}\n`;      
        salida += textocabecera;
        consola += textocabeceraConsola;
        salida += `${adornoCabecera.magenta}\n`; 
        consola += `${adornoCabecera}\n`;

        for (let n=1; n<=argv.h; n++) {
            if (n === argv.h) {
                salida += `${colors.blue(argv.b)} ${colors.green('x')} ${colors.blue(n)} = ${colors.yellow(argv.b * n)}`
                consola += `${argv.b} x ${n} = ${argv.b * n}`
            }
            else {
                salida += `${colors.blue(argv.b)} ${colors.green('x')} ${colors.blue(n)} = ${colors.yellow(argv.b * n)}\n`;
                consola += `${argv.b} x ${n} = ${argv.b * n}\n`;
            }       
        }
        
        if (argv.l) {   
            console.log(salida);
        }

        if (argv.c) {
            // fs.writeFile(`tabla-${argv.b}.txt`, salida, (err) => {
            //     if (err) throw err;
            //     console.log(`tabla-${argv.b}.txt creada`);
            // });

            fs.writeFileSync(`./salida/tabla-${argv.b}.txt`, consola);

            return `tabla-${argv.b}.txt`;
        }
        else{
            return;
        }
    } catch (err) {
        throw err;
    }      
}

module.exports = {
    crearArchivoTabla
};      
                