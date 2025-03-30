// <------- Arreglo de actividades sospechozas -----> modificar el valor de ser necesario
var actividadesSospechozas = []

function agregarActividad(descripcion, nivelRiesgo){
    /* TU CODIGO */
    if (!descripcion || !nivelRiesgo ) return "Descripcion o nivel de riesgo no valido"
    if ( nivelRiesgo !== "bajo" && nivelRiesgo !== "medio" && nivelRiesgo !== "alto") return "Nivel de riesgo no valido, el nivel debe ser: bajo, medio o alto"
    actividadesSospechozas.push("Descripcion: " + descripcion + ", Riesgo - " + nivelRiesgo)
    return `Actividad: ${descripcion} con Nivel de riesgo: ${nivelRiesgo} fue agregada con exito`
    

}

function eliminarActividad(indice){
    /* TU CODIGO */
    
}

function filtrarActividadesPorRiesgo(nivelRiesgo){
    /* TU CODIGO */
    if(!nivelRiesgo) return "Nivel de riesgo no valido"
    if(nivelRiesgo !== "bajo" && nivelRiesgo !== "medio" && nivelRiesgo !== "alto") return  "Nivel de riesgo no valido, el nivel debe ser: bajo, medio o alto"
    
     var nuevoArray = actividadesSospechozas.filter(function(actividad){
        if(actividad.includes(nivelRiesgo)) return actividad
     })

     if(nuevoArray.length > 0) return nuevoArray
     return "No hay actividades con este nivel de riesgo"


    }


function generarReporteDeActividades(){
    /* TU CODIGO */
    
    var nuevoArray = []
    if (actividadesSospechozas.length > 0){
        for (var i = 0; i < actividadesSospechozas.length; i++){
            nuevoArray.push(`Id: ${i}, ${actividadesSospechozas[i]}`)
        }
            return nuevoArray
    } else return "No hay actividades para mostrar"
}

// <------- NO TOCAR -------->
module.exports = {
  agregarActividad,
  eliminarActividad,
  filtrarActividadesPorRiesgo,
  generarReporteDeActividades
}




