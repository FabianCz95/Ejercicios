var edad = prompt("Introduce tu edad")

if (Number(edad) > 18) {
    document.write('Ya puede conducir')
} else {
    resta = 18 - Number(edad);
    alert('Debe esperar ' + resta + ' años para conducir')
}