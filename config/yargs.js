const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
}

const completado = {
    default: true,
    alias: 'c'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completdo de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea de la lista', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}