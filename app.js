let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';

/*
Conexión entre HTML y JavaScript a través del Document Object Model (DOM):
El DOM permite a JavaScript acceder y manipular los elementos HTML de la página web.
Se utiliza el método document.querySelector() para seleccionar elementos HTML específicos.

Manipulación del contenido de elementos HTML:
Una vez seleccionado un elemento, se puede acceder a sus propiedades y métodos, como innerHTML para cambiar su contenido.

Estructura de una aplicación web:
Una aplicación web se compone de tres elementos principales: HTML (estructura), CSS (estilos) 
y JavaScript (funcionalidad). En esta sesión se enfocaron en la conexión entre HTML y JavaScript 
a través del DOM.

Uso del Live Server:
El Live Server permite actualizar automáticamente la página web en el navegador cuando se 
realizan cambios en el código.

Continuación del proyecto del "Juego del número secreto":
Este curso es una continuación del proyecto anterior, donde ahora se está integrando HTML 
y JavaScript de manera más profesional.


En resumen, la sesión se centró en cómo conectar y manipular elementos HTML desde JavaScript 
utilizando el DOM, como parte del desarrollo de una aplicación web más avanzada.
*/

function intentoDeUsuario() {
    alert('Click dese el botón');
}

function mostrarEnConsola() {
    console.log('El botón fue clicado');
}

function preguntarCiudad() {
    let ciudad = prompt('Nombre de una ciudad de Brasil:');
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function mostrarAlerta() {
    alert('Yo amo JS');
}

function sumarNumeros() {
    let num1 = parseFloat(prompt('Introduce el primer número:'));
    let num2 = parseFloat(prompt('Introduce el segundo número:'));
    alert(`El resultado de la suma es: ${num1 + num2}`);
}

/*
Claro, puedo explicarlo usando una analogía. Imagina que estás construyendo una casa:
HTML sería como los cimientos y la estructura básica de la casa. Es la base que sostiene todo lo demás.
CSS sería como la decoración y el diseño de la casa. Es lo que le da el estilo, los colores, 
las texturas y la apariencia final.
JavaScript sería como los electrodomésticos y las funciones inteligentes de la casa. 
Es lo que le da interactividad y dinamismo, permitiendo que la casa "haga cosas" por sí misma.

Así como una casa necesita cimientos sólidos, decoración atractiva y funcionalidades prácticas, 
una página web necesita HTML para estructurar el contenido, CSS para darle estilo y JavaScript 
para agregar interactividad.Cada una de estas tecnologías tiene un papel fundamental y 
complementario en la construcción de una experiencia web completa y satisfactoria para los usuarios. 

https://www.aluracursos.com/blog/html-css-javascript-cuales-son-las-diferencias
*/

/*___________________________________________________________________________________________*/
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function intentoDeUsuario() {
    alert('Click en el botón');
}

asignarTextoElemento('h1', 'Juego del Número Secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 10');

/*Aquí tienes un resumen de la clase:
El instructor explicó que, como buena práctica de programación, se debe intentar optimizar y hacer más eficiente el código, evitando repetir 
partes del mismo.
Para ello, el instructor propuso encapsular el código repetido en una función llamada asignarTextoElemento().
Esta función recibe dos parámetros: elemento (el elemento HTML al que se le asignará el texto) y texto (el texto a asignar).
De esta manera, la función se vuelve genérica y reutilizable, ya que no depende de valores fijos, sino de los parámetros que se le pasen.
Al llamar a la función con los parámetros adecuados, se logra el mismo resultado que antes, pero con mucho menos código repetido.
El instructor resaltó que esto mejora la mantenibilidad y escalabilidad del código, ya que cualquier cambio futuro se podrá hacer en un solo 
lugar (la función).
En el próximo video, el instructor continuará desarrollando más funciones.
*/
let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function intentoDeUsuario() {
    alert('Click en el botón');
    return;
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    return numeroSecreto;
}

asignarTextoElemento('h1', 'Juego del Número Secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 10');

/*
Aquí tienes un resumen de la clase:
En esta clase, el instructor enseña cómo crear una función llamada "GenerarNumeroSecreto" que genera un número aleatorio entre 1 y 10.
La función utiliza el método Math.random() para generar un número decimal aleatorio entre 0 y 1, luego lo multiplica por 10 y usa Math.floor() para obtener la parte entera, sumando 1 al final para obtener un número entre 1 y 10.
El instructor explica la diferencia entre una variable de ámbito global y una variable de ámbito de bloque (dentro de la función). 
Recomienda evitar tener variables con el mismo nombre dentro y fuera de la función para evitar confusiones.
Finalmente, el instructor muestra cómo llamar a la función "GenerarNumeroSecreto" y cómo imprimir el número generado en la consola 
del navegador, demostrando que el número cambia cada vez que se recarga la página.
La siguiente lección se enfocará en conectar esta función de generación de número aleatorio con el botón "Intentar" del juego.
*/

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario === numeroSecreto);
    return;
}

function generarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    return numeroSecreto;
}

asignarTextoElemento('h1', 'Juego del Número Secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 10');
/*
Aquí tienes un resumen de la clase:
Se está trabajando en un juego donde el usuario debe adivinar un número secreto generado por la máquina.
Para eso, se necesita capturar el valor ingresado por el usuario a través de un input HTML.
Se utiliza el método getElementById() de JavaScript para obtener el valor del input.
Se compara el valor ingresado por el usuario con el número secreto generado.
Se descubre que el valor del input se está devolviendo como un string, mientras que el número secreto es un número.
Para solucionar esto, se utiliza la función parseInt() para convertir el valor del input a un número antes de hacer la comparación.
Finalmente, se usa el operador de igualdad estricta === para asegurarse de que el valor y el tipo de dato sean iguales al hacer la comparación.
Se enfatiza la importancia de validar los tipos de datos cuando se trabaja con entradas de usuario para evitar problemas.
*/

/*
// Función que muestra "¡Hola, mundo!" en la consola
function saludarMundo() {
    console.log('¡Hola, mundo!');
}

// Función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola
function saludarNombre(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

// Función que recibe un número como parámetro y devuelve el doble de ese número
function doblarNumero(numero) {
    return numero * 2;
}

// Función que recibe tres números como parámetros y devuelve su promedio
function promedioTresNumeros(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

// Función que recibe dos números como parámetros y devuelve el mayor de ellos
function mayorDeDosNumeros(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// Función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo
function cuadradoNumero(numero) {
    return numero * numero;
}

// Ejemplos de uso
saludarMundo(); // Muestra "¡Hola, mundo!" en la consola
saludarNombre('Juan'); // Muestra "¡Hola, Juan!" en la consola
console.log(doblarNumero(5)); // Devuelve 10
console.log(promedioTresNumeros(3, 6, 9)); // Devuelve 6
console.log(mayorDeDosNumeros(4, 7)); // Devuelve 7
console.log(cuadradoNumero(4)); // Devuelve 16
*/

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', 'Acertaste el número');
    } else {
        if (numeroDeUsuario >  numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es mayor');
        }
        else {
        asignarTextoElemento('p', 'El número secreto es menor');
        }   
    }   
    return;
}
/*
Aquí tienes un resumen de la clase:
En esta clase, el instructor Christian Velasco y Leonardo José Castillo Lacruz están trabajando en la lógica del juego de adivinar un 
número secreto.
Primero, eliminan el código que simplemente imprimía el número secreto en la consola y lo reemplazan con la lógica para verificar si 
el usuario acertó el número.
Si el usuario acierta el número secreto, se llama a la función asignarTextoElemento para mostrar un mensaje indicando que el usuario acertó.
Si el usuario no acierta, se utiliza la misma función asignarTextoElemento para dar pistas al usuario sobre si el número secreto es 
mayor o menor que el número ingresado.
Se destaca la potencia de utilizar funciones, ya que la función asignarTextoElemento se reutiliza en múltiples partes del código, 
lo que lo hace más mantenible y optimizado.
Finalmente, se prueba el juego con varios intentos y se demuestra que el juego está completo y listo para avanzar al siguiente tema.
*/

let numeroSecreto3 = 0;
let intentos = 0;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos ===1  ? 'vez' : 'veces')}`);
    } else {
        if (numeroDeUsuario >  numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es mayor');
        }
        else {
        asignarTextoElemento('p', 'El número secreto es menor');
        }   
    }   
    return;
}
/*
Aquí tienes un resumen de la clase:
En esta clase, se está implementando una nueva funcionalidad al juego que se está desarrollando, que es mostrar al usuario 
cuántos intentos hizo para adivinar el número secreto.
Para ello, se crea una variable llamada numeroIntentos que se inicializa en 1, ya que se sabe que el usuario hará al menos un intento.
Cada vez que el usuario no acierta el número, se incrementa el valor de numeroIntentos usando el operador de incremento abreviado ++.
Luego, cuando el usuario finalmente adivina el número, se muestra un mensaje que indica cuántos intentos hizo, utilizando una 
plantilla de cadena de texto (template string) y el operador ternario.
El operador ternario se usa para determinar si debe mostrar "vez" o "veces" en el mensaje, dependiendo de si el usuario hizo 1 
intento o más de 1.
Al final, se prueba el juego con diferentes números para verificar que la funcionalidad de mostrar los intentos está funcionando correctamente.
*/

let numeroSecreto4 = generarNumeroSecreto();
let intentos1 = 1;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos ===1  ? 'vez' : 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //El usuario no acertó
        if (numeroDeUsuario >  numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es mayor');
        }
        else {
        asignarTextoElemento('p', 'El número secreto es menor');
        }
        intentos++;
        limpiarCaja();   
    }   
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    return;
}
/* 
En esta clase, se abordó la mejora de un juego de adivinanza de números. Se discutió la necesidad de 
limpiar el campo de entrada después de cada intento fallido, para lo cual se creó una función llamada 
limpiarCaja(). Esta función utiliza document.querySelector o getElementById para seleccionar el elemento 
de entrada y establecer su valor en una cadena vacía, facilitando así la experiencia del usuario.
Además, se habló sobre la activación de un botón de "nuevo juego" que inicialmente está deshabilitado. 
Se explicó cómo remover el atributo Disable del botón una vez que el usuario acierta, 
permitiendo así que el botón se active y el usuario pueda reiniciar el juego. 
Se utilizaron métodos del DOM para lograr esto, como removeAttribute.
Finalmente, se enfatizó la importancia de la interactividad en el juego y se dejó la 
implementación del evento para el botón de "nuevo juego" para una próxima clase.
*/
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juevo
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();

/*
En esta clase, se abordó la implementación de un botón de "Nuevo Juego" en un juego, 
utilizando la gestión de eventos en programación. Se definió la función reiniciarJuego, 
que se encarga de reiniciar todas las condiciones del juego. Los pasos clave incluyen:
Limpieza de la caja de texto: Se utiliza la función limpiarCaja para vaciar cualquier texto previo.
Mensajes iniciales: Se crea una función llamada condicionesIniciales que establece los 
mensajes de inicio y el rango de números, además de reiniciar el contador de intentos.
Generación de un nuevo número aleatorio: Se llama a la función correspondiente para generar 
un nuevo número secreto.
Deshabilitar el botón de Nuevo Juego: Se utiliza setAttribute para establecer el atributo 
disable en true, evitando que el botón se pueda presionar hasta que el juego termine.

Al final, se probó el funcionamiento del juego, asegurando que todas las condiciones iniciales 
se restablecieran correctamente al iniciar un nuevo juego. Se destacó la importancia de organizar
el código y mejorar su legibilidad.
*/
/*https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals*/

/*En esta clase, se abordó el tema de las listas en JavaScript, específicamente los arreglos. 
Se destacó que, aunque JavaScript permite listas combinadas, es recomendable mantener 
la homogeneidad en las listas, es decir, que todos los elementos sean del mismo tipo 
(cadenas, números, objetos, etc.).Se explicaron varias operaciones comunes con arreglos, 
como agregar elementos utilizando el método push, que permite añadir elementos al final de la lista. 
También se mencionó cómo obtener el tamaño de un arreglo con la propiedad length, enfatizando 
la importancia de escribirlo correctamente.Se discutió cómo acceder a los elementos de un arreglo 
mediante su índice, recordando que la numeración comienza en 0. Se mostró cómo obtener el primer y 
el último elemento de un arreglo, así como la importancia de conocer la última posición para evitar 
errores al acceder a posiciones no válidas.Finalmente, se hizo hincapié en la importancia de leer la 
documentación de JavaScript para profundizar en el manejo de listas y se mencionó que en la próxima 
clase se implementará lógica para evitar que los números sorteados se repitan.*/

let numeroSecreto5 = 0;
let intentos2 = 0;
let listaNumeroSorteados = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos ===1  ? 'vez' : 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //El usuario no acertó
        if (numeroDeUsuario >  numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es mayor');
        }
        else {
        asignarTextoElemento('p', 'El número secreto es menor');
        }
        intentos++;
        limpiarCaja();   
    }   
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //Si el número generado está incluído en la lista
    if (listaNumeroSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumeroSorteados.push(numeroGenerado)}
    return numeroSecreto;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juevo
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();

/*En esta clase, se abordaron conceptos importantes sobre el uso de listas (arreglos) en programación, 
específicamente en el contexto de un juego que involucra la generación de números aleatorios. 
Se explicó cómo crear una lista para almacenar números sorteados y cómo verificar si un número ya 
ha sido sorteado utilizando el método includes. Se introdujo la recursividad como una técnica para 
que una función se llame a sí misma, lo que permite generar un nuevo número si el número generado ya 
existe en la lista. Se enfatizó la importancia de tener una condición de salida en la recursividad para 
evitar que la función se ejecute indefinidamente, lo que podría causar un bloqueo en el programa.
Finalmente, se realizaron pruebas en el código para asegurarse de que el algoritmo funcionara correctamente,
 generando números únicos en cada jugada y mostrando cómo la lista evolucionaba a medida que se sorteaban 
 nuevos números. Se destacó la necesidad de manejar adecuadamente la recursividad para evitar problemas 
 en la ejecución del programa.*/

let numeroSecreto6 = 0;
let intentos3 = 0;
let listaNumeroSorteados1 = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos ===1  ? 'vez' : 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //El usuario no acertó
        if (numeroDeUsuario >  numeroSecreto) {
        asignarTextoElemento('p', 'El número secreto es mayor');
        }
        else {
        asignarTextoElemento('p', 'El número secreto es menor');
        }
        intentos++;
        limpiarCaja();   
    }   
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumeroSorteados1.length === numeroMaximo) {
        asignarTextoElemento('p', 'Ya no hay más números para sortear');
    } else {

        //Si el número generado está incluído en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }

}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juevo
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();