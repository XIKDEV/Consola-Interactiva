const fs = require('fs')

const archivo = './db/data.json'

guardarDB = (data) => {

    
    fs.writeFileSync( archivo, JSON.stringify(data) );

}

const leerDB = () => {
    if (!fs.existsSync(archivo)){
        return null;
    }

    const info = fs.readFileSync( archivo, {encoding: 'utf-8'} );
    //obtener mi arreglo de la base de datos ([data.json])
    const data = JSON.parse(info)

    
    console.log(data)
    
    return data
}

module.exports = {
    guardarDB,
    leerDB
}