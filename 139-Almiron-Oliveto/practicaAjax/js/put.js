document.addEventListener("DOMContentLoaded", function () {
    "use strict"
    console.log("El script de Put esta funcionando");

    let baseURL = 'https://web-unicen.herokuapp.com/api/groups/';
    let groupID = '139';
    let collectionID = 'cristian';

    let tresPersonas = [{
        "nombre": "Cristian",
        "apellido": "Almiron",
        "dni": "runing",
      },
      {
        "nombre": "Rafael",
        "apellido": "Lotero",
        "dni": "caballos",
      },
      {
        "nombre": "Jim",
        "apellido": "Morrison",
        "dni": "autos",
      }]
    let persona =[];

  
let contenedor = document.querySelector("#result");

function sendData(){
  let name = document.querySelector("#name").value;
  if( name.length === 0 ) { 
    contenedor.innerHTML = "Ingrese un nombre";
    
    return;
  }
  let data = {
    "thing": {
      "nombre": name,
      "apellido": apellido,
      "disciplina": disciplina
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
    contenedor.innerHTML = "<tr> El nombre es: "+ json.information.thing.nombre + "</tr>";
    console.log(json);
  })
  .catch(function(e){
    console.log(e)
  })

}

document.querySelector("button").addEventListener('click', sendData)

    function getData() {
        fetch(baseURL + groupID + "/" + collectionID, {
            method: "GET",
            mode: 'cors',
        }).then(function (r) {
            if (!r.ok) {
                console.log("error")
            }
            return r.json()
        })
            .then(function (json) {
                console.log(json);
                let contenedor = document.querySelector("#result");
                contenedor.innerHTML = ''
                for (let data of json.cristian) {
                    contenedor.innerHTML += data.thing.nombre + "<br />";
                }
            })
            .catch(function (e) {
                console.log(e)
            })

    }

    document.querySelector("button").addEventListener('click', function () {
        getData();
    })


    function getDataId() {

        let idJson = document.querySelector("#idJson").value;

        fetch(baseURL + groupID + "/" + collectionID + "/" + idJson, {
            method: "GET",
            mode: 'cors',
        }).then(function (r) {
            if (!r.ok) {
                console.log("error")
            }
            return r.json()
        })
            .then(function (json) {
                console.log(json);
                let contenedor = document.querySelector("#result");
                contenedor.innerHTML = ''
                let data = json;

                contenedor.innerHTML += "El nombre es: " + data.information.thing.nombre + "<br />";
                contenedor.innerHTML += "La fecha es: " + data.information.dateAdded + "<br />";
            })
            .catch(function (e) {
                console.log(e)
            })

    }

    document.querySelector("#ver-button").addEventListener('click', function () {
        getDataId();
    })

    function deleteDataId() {

        let idJson = document.querySelector("#idJson-delete").value;

        fetch(baseURL + groupID + "/" + collectionID + "/" + idJson, {
            method: "DELETE",
            mode: 'cors',
        }).then(function (r) {
            if (!r.ok) {
                console.log("error")
            }
            return r.json()
        })
            .then(function (json) {
                console.log(json);

                let data = json;
                let contenedor = document.querySelector("#result");
                contenedor.innerHTML = data.message + "<br />";
                getData();

                /*
                contenedor.innerHTML = ''
                let data = json;
          
                  contenedor.innerHTML += "El nombre es: " +data.information.thing.nombre + "<br />";
                  contenedor.innerHTML += "La fecha es: " +data.information.dateAdded + "<br />";
          
                  */
            })
            .catch(function (e) {
                console.log(e)
            })

    }

    document.querySelector("#delete-button").addEventListener('click', function () {
        deleteDataId();
    })

    function putsendData(){
        let id = document.querySelector("#id").value;
        let name = document.querySelector("#name").value;
        if( name.length === 0 || id.length === 0) { 
          contenedor.innerHTML = "Ingrese un ID y nombre";
          return;
        }
        let data = {
          "thing": {
            "nombre": name,
            "apellido": apellido,
            "disciplina": disciplina
          }
        };
        fetch(baseURL + groupID + "/" + collectionID + "/" + id, {//En el id quiero modificar y que es lo que le vamos a poner como nuevo
          "method": "PUT",
          "mode": 'cors',
          "headers": { "Content-Type": "application/json" },
          "body": JSON.stringify(data)
        }).then(function(r){
          if(!r.ok){
            console.log("Error")
          }
          return r.json()
        })
        .then(function(json) {
          contenedor.innerHTML = JSON.stringify(json);
        })
        .catch(function(e){
          console.log(e)
        })
      
      }
      
      document.querySelector("#button-PUT").addEventListener('click', putsendData)

      
})