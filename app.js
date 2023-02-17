require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
// const {mostrarMenu, pausa} = require('./helpers/mensajes')
const {inquirerMenu,
       pausa,
       leerInput,
       listadoTareasBorrar,
      confirmar,
      mostrarListadoCheckList} = require('./helpers/inquirer');
// const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas')
// console.clear()
const main = async() => {
  
  let opt = ''
  let tareas = new Tareas()
  
  const tareasDB = leerDB();
  
  if(tareasDB){
    // establecer tareas
    tareas.cargarTareasFromArray(tareasDB)
  }
  
  do {
    //Imprimir menu
    opt = await inquirerMenu(); 
    // console.log({opt})
    switch (opt) {
      case '1':
        //crear opcion
        const desc = await leerInput('Descripción: ');
        console.log(new Date())
        tareas.crearTarea(desc)
        break;
      case '2':
        // console.log(tareas.listadoArr)
        tareas.listadoCompleto()
        break;
      case '3':
        tareas.listarPendientesCompletadas(true)
        break;
      case '4':
        tareas.listarPendientesCompletadas(false)
        break;
      case '5':
        const ids = await mostrarListadoCheckList(tareas.listadoArr)
        tareas.toggleCompletadas(ids)
        break;
      case '6':
        console.log()
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== '0'){

          const ok = await confirmar('Estas seguro?');
          if(ok){
            tareas.borrarTarea(id)
            console.log('Tarea borrada')
          }
        }
        // console.log({id})
        break;
    
      default:
        break;
    }

    guardarDB( tareas.listadoArr)

    if (opt !== 0) await pausa()
  } while (opt !== '0');
  

  // pausa();
}

main();
