fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response)=> response.json())
.then((datos)=>{ 
//construir con el DOM
console.log(datos);
datos.forEach(post => {
    const li = document.createElement("li");
    li.innerHTML=`
    <h3>${post.tittle}</h3>
    <p>${post.body}</p>
    `;
    lista.append(li)
});
})
/*
function saludar(nombre, apellido){
    alert("hola " + nombre + " " + apellido + " como estas");
}
let ingresaNombre = prompt("Ingresa nombre")
let ingresaApellido = prompt("Ingresa apellido")
saludar(ingresaNombre, ingresaApellido)
*/
/*
//Clase1/Conceptos generales
//<script src="js/main.js"></script>//se enlaza poniendo la etiqueta script antes de que termine el body
//Variables: es un dato que puede variar, espacio en la memoria de la computadoraen la que se puede guardar informacion
//tienen un nombre y un valor
//el valor se le puede dar despues o se la puede inicializar
//reservame un espacio de memoria que llame numero
var nombre;//esta no se usa
//otro tipo de variable con otra palabra reservadas 
let numero;//esta se usa
let nombreCompletoDeUsuario;
//tambien existen variables que no cambian, son constantes y se tienen que inicializar si o si(se suele usar mayuscula para las constantes) 
const PI = 3.1416;
//luego de reservar el espacio de memoria se le da un valor a la variable con un = y luego el valor
numero = 10;
console.log(numero);
nombre = "Dani";//la comilla simple y doble es lo mismo siempre
nombreCompletoDeUsuario = "Dani Riverol";
//se pueden reasignar valores
numero = 20;
nombre = "Fer";
nombreCompletoDeUsuario = "Fer Ferrer";
//para ver estos datos se debe usar la consola
console.log(numero); //nos mostrar el ultimo valor puesto para numero
//se pueden hacer operaciones con console.log pero no queda guardado
console.log(PI + 35);
//tambien se puede promero declarar y despues usar el console.log
let result = PI + 35;
console.log(result);
//ejemplo de concatenacion
nombre = "Luis";
let apellido = "Gontero";
nombreCompletoDeUsuario = nombre + "" + apellido;
console.log(nombreCompletoDeUsuario);
alert(nombreCompletoDeUsuario);//esto le aparece al usuario
*/

//Clase 2/Control de flujos
//valores booleanos: true o false
//si es verdadero si se ve
/*if(true){
    console.log("Este mensaje es visible");
}
//si es falso no se ve
if(false){
    console.log("Este mensaje es visible");
}*/
//asignacion =, comparacion ==
/*let numero = 15
if(numero == 15){
    console.log("El numero es igual a 15"); //si se ve porque numero es igual a 15, si no fuese 15 no se veria
}*/
//el valor lo puede dar el usuario con el prompt
//let numeral = parseInt(prompt("Ingresa un numero"));
/*if(numeral == 12){
    console.log("El numero es igual a 12"); //si se pone 12 en prompt se vera
}else{
    console.log("El numero no es 12" + " es:" + numeral);
}*/
//parseInt() me cobierte el valor del prompt a numero entero, parseFloat() me lo cobierte a un decimal
//si o si se necesita parsear cuando se hacen operaciones
/*if(numeral == 12){
    console.log("El numero es igual a 12"); //si se pone 12 en prompt se vera
}else if(numeral > 23){
    console.log("El numero que ingresaste no es 12 pero es mayor a 23")

}else{
    console.log("El numero no es 12" + " es:" + numeral);
}*/
//variable boolean: contiene un valor booleano//es lo mismo que antes pero declarando dos variables 
/*let esIgual = numeral == 12;
let esMayor = numeral > 23;
if(esIgual){
    console.log("El numero es igual a 12"); //si se pone 12 en prompt se vera
}else if(esMayor){
    console.log("El numero que ingresaste no es 12 pero es mayor a 23")

}else{
    console.log("El numero no es 12" + " es:" + numeral);
}*/
/*//el triple igual === es que es estrictamente igual, evalua tanto el valor como el tipo de dato
1 == "1"//verdadero
1 ==="1"//falso
//
let usuario = prompt("Ingresa tu usuario")
let password = prompt("Ingresa ti contraseña") */
/*if (usuario == ""){                            //si usuario es igual a un streem vacio
    console.log("No ingresaste ningun valor")
}else{
    console.log("Hola " + usuario)
}*/
/*if (usuario != ""){                            //(alt+33)!//es distinto de un streem vacio
    console.log("Hola" + usuario)
}else{
    console.log("No ingresaste ningun valor")
}*/
//AND &&
/*if (usuario != "" && password != ""){            //es distinto de un streem vacio para las dos condiciones
    console.log("Hola" + usuario)
}else{
    console.log("No ingresaste alguno de los datos")
}*/
//
/*let pass = 1234
let user = "luiso"
if (usuario == user && password == pass){            //
    console.log("Hola " + usuario)
}else{
    console.log("Usuario o contraseña incorrecta")
}
// si en vez de && usamos (alt+124) || si ponemos cualquiera de las opciones bien nos aparecera hola + usuario
let nombre = prompt("Ingresa tu nombre");
if(nombre == "pedro" || nombre == "PEDRO"){
    console.log("Hola Pedro que bueno tenerte de nuevo");
}else{
    console.log("Hola " + nombre)
}
*/

//Clase3/Ciclos 
//Ciclos: medio rapido para repetir una accion
//Ciclo for: desde, hasta, actualizacion 
/*
for(let i=0; i<=10; i++){    //i++=i+1   <=(menor o igual)
     console.log(i);
}
*/
//ejemplo con nombres, podes ingresar tres nombres
/*for(let i=1; i<=3; i++){    //i++=i+1   <=(menor o igual)//si i fuese 0 como en el anterior podria poner 4 nombres, no tres
    let ingreso = prompt("Ingresa tu nombre")
    console.log(ingreso);
}*/
/*
//bucle para hacer un login con intentos
let palabraClave= "patatas";
for(let index = 1; index <= 3; index++){
    let palabraUsuario = prompt("Ingresa tu palabra clave")
    if (palabraClave === palabraUsuario){
        console.log("Login exitoso");
        break;//termina el bucle cuando se cumple una condicion
    }else{
        console.log("Te quedan " + (3 - index) + "intentos");
    }
}
//Continue; hace que no aparezca un numero
for (let index = 0; index <= 10; index++){
    if (index == 5){
        console.log("Salto");
        continue;
    }
    console.log(index);
}
*/
//While o mientras
/*let repetir = true;
while(repetir){
    console.log("Soy un bucle infinito");
    repetir = false;
}*/
//
/*let edad = parseInt(prompt("Ingresa tu edad"));
while(edad < 18){
    console.log("No puedes ingresar, tenes menos de 18");
    edad = parseInt(prompt("Ingresa tu edad")); //si tiene menos de 18 le hacemos que ingrese la edad de nuevo
}*/
//
/*let palabra = "tomate";
let palabraIngresada = prompt("Ingresa la palabra clave");
while(palabra != palabraIngresada){
    console.log("Palabra incorrecta"); 
    palabraIngresada = prompt("Ingresa la palabra clace"); //mientras la palabra clave ingresada sea distinta a la palabra
}       */                                               //clave correcta nos volvera a pedir que ingresemos la pc
//do while
/*let condicion = false;
do{
    console.log("Yo me ejecuto igual")
}while(condicion);*/
//como continuar es falso hace que termine el bucle, se ejecuta solo una vez; no sigue preguntando si es verdadero
/*let continuar = true;
let passGuardado = "tomate";
do{
    let pasword = prompt("Ingresa tu password");
    if(password == passGuardado){
        console.log("Bienvenido");
        continuar = false;
    }
}while(continuar);
*/
//switch
/*let ingreso = prompt("Ingresa una opcion \n 1=Carbon \n 2=Leña \n 3=Postes \n 4=Tablas \n 5=Varillas"
);
switch(ingreso){
    case "1":
        alert("Seleccionaste carbon"); //esto solo me permite seleccionar una opcion, porque tiene break
        break;
    case "2":
        alert("Seleccionaste Leña");
        break;
    case "3":
        alert("Seleccionaste postes");
        break;
    default:
        alert("Sin stock");
        break;
}*/



//Clase4/Funciones
//Permite reutilizar codigo
//se tiene que declarar con la palabra function
/*function saludar(){
    alert("hola como estas?")
}
//luego hay que llamarla, no ejecuta el codigo que tiene adentro hasta que la llamo
saludar();*/
//
/*function solicitarNombre(){
    let nombre = prompt("Ingresa tu nombre");
    alert(nombre)

}
solicitarNombre();*/
//funciones con parametros
/*function saludar(parametro){
    alert("hola " + parametro + " como estas?")
}
let ingresaTuNombre = prompt("Ingresa tu nombre");
saludar(ingresaTuNombre);*/
//con mas de un parametro
/*function saludar(nombre, apellido){
    alert("hola " + nombre + " " + apellido + " como estas?")
}
let ingresaTuNombre = prompt("Ingresa tu nombre");
let ingresaTuApellido = prompt("Ingresa tu apellido");
saludar(ingresaTuNombre, ingresaTuApellido);*/
//funciopnes mas calculos
/*function sumar(parametro1, parametro2){
    alert(parametro1 + parametro2);
}*/
//me quede en el minuto 55










/*
//Clase 8/DOM
//document es un objeto global que engloba a todo nuestor documento html
//la etiqueta html es un nodo de tipo elemento, tambien existe el nodo texto que tiene texto encerrado por la etiqueta html
//el dir es un comando del objeto console que me muestra el arbol de directorios del ducument
//podemos ver todo el documento o poner .body u otro elemento o nodo que querramos ver especificamente
//console.dir(document.body);
//existen 12 nodos; document, element(etiquetas), Attr(atrivutos de las etiquetas), text(contenido de texto),...
//...comment(comentarios), style, etc
//formas de axeder a los elementos del DOM, getElementById(), getElementsByClassName(), getElementsByTagName()
//es aconsejable guardar los elementos del dom en una variable 
const h2= document.getElementById("h2"); //por el id
const parrafo= document.getElementsByTagName("p"); //por todas las etiquetas p
const parrafoClases= document.getElementsByClassName("parrafor");
//console.log(h2.innerHTML); //innerHTML para que aparezca el contenido de la etiqueta
//console.log(parrafo[1]); //en esta le pongo el [1] para que me de solo el parrafo 2, le agrego posicion
//console.log(parrafoClases);
//se pueden axeder a todos los contenido sin ponerle posicion
//for (const parrafor of parrafoClases){
//    console.log(parrafor.innerHTML);
//}
//veremos como hacer lo ultimo de otra manera para entender porque se guardan elementos en variables
for (const parrafor of document.getElementsByClassName("parrafor")){
    console.log(parrafor.innerHTML);
} //nos da el mismo resultado pero es mas engorroso leerlo
//lo siguiente es para saberlo pero se hace desde el html
//se pueden modificar elementos con innerText
console.log(parrafo[0].innerText="este es un contenido dinamico");
//tambien se puede modificar el contenido con innerHTML pero poedos crear estructuras completas de etiquetas
h2.innerHTML="<strong>Soy un inner html</strong>"; //ademas me sale el titulo Dom que le puse antes
//como crear elementos con createElement
const texto= document.createElement("p");
texto.innerText= "soy un parrafo creado en js";
document.body.append(texto);
//me hace un imput con la palabra ingreso adentro
const input= document.getElementById('ingreso');
input.value= 'ingreso';
//
const nombres= ["Hugo", "Paco", "Luis"];
const ul= document.getElementById('lista');
for (const nombre of nombres) {
    let li = document.createElement('li');
    li.innerText= nombre;
    ul.append(li)
}
//con la siguiente tecnica podemos escribir cosas y se respetaran los enter como saltos de linea
//alt+96 comillas invertidas
//no se porque no anda
const producto= {id:1, nombre:"Tela", precio:200}
let concatenado= "Id" + producto.id + "Nombre: " + producto.nombre + " precio " + producto.precio;
let templatesLiterals= `Id ${producto.id}
Nombre: ${producto.nombre}
Precio: $ ${producto.precio}`
contenedor.innerText= templatesLiterals
//lo mismo que antes pero mas complejo
const servicios=[
    {id:1, nombre: "Varillas", precio: 300, img: "varillas.jpg"},
    {id:2, nombre: "Postes", precio: 300, img: "colorado.jpg"},
    {id:3, nombre: "Tablas", precio: 300, img: "quebrachos.jpg"},
];
for (const servicio of servicios) {
    let li = document.createElement('li')
    li.innerHTML=`
    <h3>${servicio.nombre}</h3>
    <p>${servicio.precio}</p>
    <img src="./img/${servicio.img}" alt="">`
    ul.append(li)
}
*/


//clase9/Eventos
//podemos controlar las acciones de los usuarios
//se puede asignar una funcion a cada uno de los eventos
//chau prompt y chau alert
//event listener= escucha de los eventos del navegador
//metodo 1  addEventListener
//h2.addEventListener('click',()=>{
//    console.log('click sobre h2');
//});
//segunda manera de declarar eventos
//h2.onclick=()=>{
//    console.log('click sobre h2');
//};
//contador, no funciona(hay que encontrar el error)
/*
const contador= document.querySelector('#contador'),
sumar=document.querySelector('#sumar'),
restar=document.querySelector('#restar');
function cambio(num){
    let cont = num++
    contador.innerText= num++
}
sumar.addEventListener('click',()=>{
    cambio(1)
})
restar.addEventListener('click',()=>{
    cambio(-1)
})
*/
//eventos comunes: mouse, teclado, change, input, submit, otros...
//los eventos mas comunes de mouse es click y mausemove
//el console log es para ver si funcina nomas y el style.color tambien
//h2.addEventListener('mousemove',()=>{
//    console.log('pasate el mouse');
//})
//otra forma
/*
h2.addEventListener('mousemove',()=>{
    h2.style.color = "blue";
})
//otra forma
function cambiarColor(){
    h2.style.color = "blue";
}
h2.addEventListener("mousemove",cambiarColor)
//eventos de teclado: keydown y keyup
//input = document.getElementById("ingreso")
//input.addEventListener('keydown',()=>{
//    console.log(input.value);
//})
//aplicacion mas practica de lo anterior
//input = document.getElementById("ingreso")
//input.addEventListener('keydown',()=>{
//    parrafo[0].innerText = input.value;
//});
//con keyup
input = document.getElementById("ingreso")
input.addEventListener('keyup',()=>{
    parrafo[0].innerText = input.value;
});
//con lo que vimos podemos campturar lo que se pone en los input
//evento change, te cambia de input al escribir y tocar enter; se puede hacer con los select tambien
const cajasDeTexto = document.querySelectorAll('input');
cajasDeTexto[0].addEventListener('change',()=>{
    console.log('cambio');
})
cajasDeTexto[1].addEventListener('change',()=>{
    console.log('cambio');
})
cajasDeTexto[2].addEventListener('change',()=>{
    console.log('cambio');
})
//falta mas de esta clase
*/

//Clase 10/Storage and JSON
//localStorage almacena datos en el navegador, por ejemplo guarda contraseñas
//min14
/*localStorage.setItem("cadena", "Soy una cadena guardada en el localstorage")
localStorage.setItem("numero", 90);
localStorage.setItem("esValido", true)

let mensaje= localStorage.getItem("cadena");
let numero= localStorage.getItem("numero");
let esValido= localStorage.getItem("esValido");
console.log(mensaje);
console.log(numero);
console.log(esValido); */
/*
//sessionStorage almacena los datos hasta que el usuario sierre la ventana
sessionStorage.setItem("seleccionados", [1,2,3,4]);
sessionStorage.setItem("esValido", false);
sessionStorage.setItem("correo", "luisgontero200gamil.com");
let seleccionados = sessionStorage.getItem("seleccionados").split(',');
let valido = sessionStorage.getItem("esValido") ==true;//con ==true me lo pasa como valor booleano
let correo = sessionStorage.getItem("correo");
console.log(seleccionados);
console.log(valido);
console.log(correo); 
//recuperamos los datos del local storage
for (let index = 0; index < localStorage.lenght; index++) {
    let clave = localStorage.key(index);
    console.log("Clave: " + clave);
    console.log("Valor: "+ localStorage.getItem(clave));
}
*/
//todo lo del formulario del profe minuto 1:14 de la clase 10
//JSON:STRINGIFY O PARSE
/*const serv= {nombre: "pedicura", precio: 2500}
let servJson= JSON.stringify(serv)
localStorage.setItem("servicio",serv.servJson);
console.log(servJson);
console.log(typeof servJson);
console.log(typeof servJson);
console.log
//me quede en el minuto 1:30
*/
/*
//clase12/Operadores y Condicionales Avanzados
//+Sugar Sintax=operadores avanzados

let precio= 100;
if(precio>100){
    console.log("Vale mas de 100");
}else{
    console.log("Es menor a 100");
}
//operador ternario/condicional ? true : false/simplifica el if y el else
precio>100 ? console.log("Vale mas de 100") : console.log("Es menor a 100");
*/

/*
//clase13/Librerias
//codigo ya escrito que tenemos a disposicion
//se incorporan por la etiqueta scrip, siempre antes de nuestro script personalizado
//primera libreria Sweet Alert, se usa la pagina sweetalertr2
Btn.value = "Registrar"
function guardar(valor){

}
function recuperarDatos(datos){

}
Btn.addEventListener("click", (e) => {
    e.preventDefault(),
checkbox.checked ? guardar("localStorage") : guardar("sessionStorage");
//Swal.fire("Ingreso Exitoso");
alert("ingreso exitoso")
}); 
//en el minuto 15 esta el formulario html del profe
Swal.fire('Any fool can use a computer')
*/

//Clase 15/Ajax y Fetch
//Enviar y recibir datos sin tener que refrescar la pagina
//GET:obtener informacion del servidor.
//POST:enviar informacion al servidor para crear algun cursor.
//PUT:crear o modificar algun recurso en el servidor.
//DELETE:eliminar algun recurso en el servidor.
//POST y PUT van acompañadas de un body.
//API aplicaciones en la que podemos solicitar o enviar informacion.
//FETCH
//con esto traje la informacion de jsonplayholder
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response)=> response.json())
.then((datos)=>{ 
//construir con el DOM
console.log(datos);
datos.forEach(post => {
    const li = document.createElement("li");
    li.innerHTML=`
    <h3>${post.tittle}</h3>
    <p>${post.body}</p>
    `;
    lista.append(li)
});
})
