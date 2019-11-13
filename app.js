const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');

let comando = argv._[0];
//argv para revisar los comandos independientes

//console.log(process.argv);

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]

//console.log(base);

//crearArchivo(base)
//    .then(archivo => console.log(`Archivo creado: ${ archivo}`))
//    .catch(err => console.log(err));