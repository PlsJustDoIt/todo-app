
let x = 10;

function handleForm() {

    
    //retrieve form and write it in a file

    const tache = document.getElementById("todo");

    //alert(tache.value);

    if (tache.value == "") {
        let place =document.querySelectorAll("input[type=submit]");

        //place.



        //place[0].insertAdjacentHTML("afterend","<span>Veuillez saisir une tache</span>");

        if (!document.getElementById("err")) {

            let err = document.createElement("span");

            err.setAttribute("id", "err");
            err.setAttribute("style", "color:cyan; padding:10px");

            err.innerHTML = "Veuillez saisir une tache";

            place[0].insertAdjacentElement("afterend",err);
        }
        
    } else {
        
        localStorage.setItem("todo".concat(localStorage.getItem("count")), tache.value); 
        tache.value = "";
        localStorage.setItem("count", parseInt(localStorage.getItem("count")) + 1);

    }

}

window.onload = function () {

    if (localStorage.getItem("count") == null) {
        localStorage.setItem("count", 0);

    }



    let date = document.getElementById("date");
    date.setAttribute("value", new Date().toISOString().split("T")[0]);
    //console.log(date.getAttribute("value"));
//getAttribute : permet de chopper un attribut d'un element html
   // console.log(date.value);

    const tache = document.getElementById("todo");
    

    function saveData() {
        localStorage.setItem("todo", tache.value); 
    }

   
        // let form = document.getElementById("form");
        // let name = document.getElementById("name");
        // let age = document.getElementById("age");
        // let email = document.getElementById("email");
        // let address = document.getElementById("address");
        // let phone = document.getElementById("phone");
    



}

