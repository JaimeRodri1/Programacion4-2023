//Jaime Arnoldo Rodriguez Meza
//Ejemplos

var nombres = ["jose","pedro","juan"]

function funciondeclarativa(nombre){
        console.log(`Buenas tardes,${nombre}`) 
}
const funcionexpresion = function(nombre){
	console.log(`Hola, fincion expresion, ${nombre}`)
}
const funcionflecha = nombre=> {
	console.log(`hola,funcion felcha, ${nombre}`)
}
for(var i00; i<nombres.length; i++){
	funciondeclarativa(nombres[i])
	funcionexpresion(nombres[i]) 
	funcionflecha(nombres[i]) 
}

//2

var data =[
    {nombre: "jose", edad: "25"},
    ]

var data =[
    {nombre: "jose", edad: "25"},
     {nombre: "alfredo", edad: 30},
     {nombre: "carmen", edad: 30}

    ]
data.forEach(function(dato){
    console.log(dato.nombre)
})

var resultado = data.filter(function(dato){
    return dato.edad >25
})

resultado

var resultado = data.map(function(dato) {
    return dato.nombre
})

resultado 

//3

var alumno = {
    nombre: "pedro",
    apellido: "guardado",

    mostrardatos: function(){
        console.log(`4{thi.nombre},${this.apellido}`)
        
    }
}

//4

function Alumno(nombreA,edadA){
	this.nombre =nombreA
	this.edad = edadA
}

var alumnos = []
for(let i=0; i<2;i++){
	var nombre= prompt("escriba el nombre")
	var edad = prompt("Escriba la edad")
	alumnos.push(new Alumno(nombre,edad))
}
