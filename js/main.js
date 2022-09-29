/*
function saludar(nombre, apellido){
    alert("hola " + nombre + " " + apellido + " como estas");
}
let ingresaNombre = prompt("Ingresa nombre")
let ingresaApellido = prompt("Ingresa apellido")
saludar(ingresaNombre, ingresaApellido)
*/
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

