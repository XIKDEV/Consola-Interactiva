/**
 * 
 */

const Tarea = require('./tarea')

class Tareas {

    _listado = {};

    //usar get 
    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            // console.log(key)
            const tarea = this._listado[key]
            listado.push(tarea)
        })

        return listado;
    }

    constructor() {
        this._listado = {}
    }

    borrarTarea( id = ''){
        if (this._listado[id]){
            delete this._listado[id]
        }
    }

    cargarTareasFromArray(tareas = []) {

        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea( desc = ''){

        const tarea = new Tarea(desc)

        this._listado[tarea.id]= tarea
    }

    listadoCompleto() {
        // Uso de JavaScript nativo para listar un arreglo
        this.listadoArr.forEach((tarea, i)=>{
            const idx = `${i+1}`.red;
            // Agregar una constante con llaves, significa destructurar una funciona, arreglo o la exportanción de un archivo
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn) 
                            ? 'Completada'.green
                            : 'Pendiente'.red
            console.log(`${idx} ${desc} :: ${estado}`)
        })
        
    }
    
    
    listarPendientesCompletadas(completadas = true){
        
        let contador = 0
        this.listadoArr.forEach(tarea => {
            
            const {desc, completadoEn} = tarea;
            const estado = (completadoEn) 
                            ? 'Completada'.green
                            : 'Pendiente'.red
            
            if(completadas){
                if( completadoEn ){
                    contador += 1
                    console.log(`${contador.toString().green}. ${desc} :: ${estado}`)
                }
            }else{
                if( !completadoEn ){
                    contador += 1
                    console.log(`${contador.toString().green} ${desc} :: ${estado}`)
                }

            }
                            

            // if(completadas === estado){
            //     console.log(`${idx} ${desc} :: ${'Completada'.green}`)
            // }
            // else if( completadas != estado){
            //     console.log(`${idx} ${desc} :: ${'Pendiente'.red}`)
            // }
            
        })

    }
    
    toggleCompletadas(ids = []){
        ids.forEach(id => {
            const tarea = this._listado[id];
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach(tarea => {
            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null
                
            }
        })
    }
}

module.exports = Tareas