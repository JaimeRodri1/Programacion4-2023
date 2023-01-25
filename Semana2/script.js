//mostrar ocultar
const hidebtn = document.querySelector('#hideElements')
const listDiv = document.querySelector('#list')

//constantes para agergar eventos
const addItemInput = document.querySelector('#addItem')
const addItemButton = document.querySelector('#addItembutton')

//constante para referenciar boton quitar
const eraser = document.querySelector('#removeItem')

//agrgar los eventos al boton ocultar/mostrar
hidebtn.addEventListener('click',()=>{
    if(listDiv.style.display == 'none'){
        listDiv.style.display = 'block'
        hidebtn.textContent = 'Ocultar'
    }else{
        listDiv.style.display ='none'
        hidebtn.textContent = 'Mostrar'
    }    
})


//comprobar si el campo esta lleno
//agragar elementos a la lista
addItemButton.addEventListener('click', ()=> {
    if (addItemInput.value === ''){
        alert("LLENE EL CAMPO")
    } else {
    
    let list = document.querySelector('ul')
    let li = document.createElement('li')
    li.textContent = addItemInput.value 
    list.appendChild(li)
    }
    
})
//}

//funcion para obtener el indice de elementos
var list = document.getElementById('listItems')
    items = list.getElementsByTagName('li')

const findIndex = (element) => {
    var len = items.length
    for (var i =0; i<len; i++){
        if (items[i]=== element){
            return i
        }
            
    }
}

list.onclick = (e) =>{
    let event = e || window.event
    src = event.target

    let myindex = findIndex(src)
    index = myindex
    //alert(myindex)
    list.querySelectorAll('li').forEach(el=>el.classList.remove('alert', 'alert-danger'))
    items[myindex].classList.add('alert', 'alert-danger')
}

//eliminar el elemento de la lista y preguntar si esta seguro
eraser.addEventListener('click', ()=>{
    var si = confirm("Seguro quieres eliminar?"); 

    if (si == true){
        items[index].parentNode.removeChild(items[index]) 
    } else {
        return false
    }
         
})

