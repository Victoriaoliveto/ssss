document.addEventListener("DOMContentLoaded", function () {
    console.log("El script de prueba esta funcionando");

//Codigo de Post para subir informacion


let baseURL = 'https://web-unicen.herokuapp.com/api/groups/';
let groupID = '139';
let collectionID = 'Almiron.Oliveto';

let contenedor = document.querySelector("#result");

function sendData(){
  let name = document.querySelector("#name").value;
  if( name.length === 0 ) { 
    contenedor.innerHTML = "Ingrese un nombre";
    
    return;
  }
  let data = {
    "thing": {
      "nombre": name
    }
  };
  fetch(baseURL + groupID + "/" + collectionID, {
    "method": "POST",
    "mode": 'cors',
    "headers": { "Content-Type": "application/json" },
    "body": JSON.stringify(data)
  }).then(function(r){
    if(!r.ok){
      console.log("error")
    }
    return r.json()
  })
  .then(function(json) {
    //aca va el codigo que quiero hacer
    //JSON.stringify(json)
    contenedor.innerHTML = "<p> El nombre es: "+ json.information.thing.nombre + "</p>";
    console.log(json);
  })
  .catch(function(e){
    console.log(e)
  })

}

document.querySelector("button").addEventListener('click', sendData)



//codigo Get para

//Put

//Delete


})