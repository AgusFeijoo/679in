// Crear un objeto con las clases de los botones y sus respectivas URLs
var botonConfig = {
    'ver-mas1': 'Departamentos/Departamento1/Departamento1.html',
    'ver-mas2': 'Departamentos/Departamento2/Departamento2.html',
    'ver-mas3': 'Departamentos/Departamento3/Departamento3.html',
    'ver-mas4': 'Departamentos/Departamento4/Departamento4.html',
    'ver-mas5': 'Departamentos/Departamento5/Departamento5.html',
    'ver-mas6': 'Departamentos/Departamento6/Departamento6.html',
    'ver-mas7': 'Departamentos/Departamento7/Departamento7.html',
    'ver-mas8': 'Departamentos/Departamento8/Departamento8.html',
    'ver-mas9': 'Departamentos/Departamento9/Departamento9.html',
    'ver-mas10': 'Departamentos/Departamento10/Departamento10.html',
    'ver-mas11': 'Departamentos/Departamento11/Departamento11.html',
    'ver-mas12a': 'Departamentos/Departamento12a/Departamento12a.html',
    'ver-mas12b': 'Departamentos/Departamento12b/Departamento12b.html',
    'ver-mas14': 'Departamentos/Departamento14/Departamento14.html',
    'ver-mas15': 'Departamentos/Departamento15/Departamento15.html',
    'ver-mas16': 'Departamentos/Departamento16/Departamento16.html',
    'ver-mas17': 'Departamentos/Departamento17/Departamento17.html',
    'ver-mas18': 'Departamentos/Departamento18/Departamento18.html',
    'ver-mas19': 'Departamentos/Departamento19/Departamento19.html',
    'ver-mas20': 'Departamentos/Departamento20/Departamento20.html',
    'ver-mas21': 'Departamentos/Departamento21/Departamento21.html',
    'ver-mas22': 'Departamentos/Departamento22/Departamento22.html',
    'ver-mas23': 'Departamentos/Departamento23/Departamento23.html',
    'ver-mas24': 'Departamentos/Departamento24/Departamento24.html',
};

// Iterar sobre las claves del objeto y asignar el evento de clic a cada botón
Object.keys(botonConfig).forEach(function(clase) {
    var boton = document.querySelector('.' + clase); // Obtener el botón por clase
    if (boton) { // Verificar si el botón existe
        boton.addEventListener('click', function() { // Asignar el evento de clic
            window.location.href = botonConfig[clase]; // Redirigir a la URL correspondiente
        });
    }
});
