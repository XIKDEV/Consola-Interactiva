require('colors');

const mostrarMenu = () =>{

    return new Promise(resolve => {

        // console.clear();
    
        console.log('//////////////////////'.magenta)
        console.log('Seleccionar una opcion'.red)
        console.log('//////////////////////'.magenta)
        console.log(new Date())
    
        console.log(`${'1.'.green} Crear tarea`)
        console.log(`${'2.'.green} Listar tareas`)
        console.log(`${'3.'.green} listar tareas completadas`)
        console.log(`${'4.'.green} Listar tarea pendientes`)
        console.log(`${'5.'.green} Completar tarea`)
        console.log(`${'6.'.green} Borrar tarea`)
        console.log(`${'0.'.green} Salir \n`)
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        readline.question('Seleccione una opcion: ', (opt) => {
            // console.log({opt})
            readline.close()
            resolve(opt)
        })
    })
}

const pausa = () => {
    return new Promise (resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question(`\nPresione ${'ENTER'.yellow} para continuar\n`, (m) => {
            readline.close()
            resolve();
        });
    });
}

module.exports = {
    mostrarMenu,
    pausa
}