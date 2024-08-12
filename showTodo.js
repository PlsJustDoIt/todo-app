
function deleteTodo() {
    alert("delete");
}

window.onload = function () {



    const liste = document.getElementById("todor");




    const user = {
        id: 5,
        firstName: "Maria",
        lastName: "Williams",
        age: 34,
        email: "m.williams@example.com",
        address: {
        streetAddress: "123 Main St",
        city: "Anytown",
        state: "US",
        postalCode: "12345",
        },
        phoneNumbers: [
        {
            type: "home",
            number: "555-555-5554",
        },
        {
            type: "work",
            number: "555-555-5555",
        },
        ],
    };

    // let my_json = JSON.stringify(user);


    //let my_json = JSON.stringify(result);



    // fs.writeFileSync("list.json",my_json.concat(",\n"),{flag:"a+"});



    // console.log(JSON.parse(fs.readFileSync("list.json").toString()));

    if (localStorage.getItem("count") != null) {

        if (localStorage.getItem("count") != 0) {

        let btn_aj = document.getElementById("btn_aj");



        let suppr = document.createElement("input");
        suppr.setAttribute("type", "button");
        suppr.setAttribute("value", "Tout supprimer");
        suppr.setAttribute("class", "btn btn-primary");

        suppr.addEventListener("click", function () {

            localStorage.clear();
            location.reload();
        
        });

        btn_aj.after(suppr);

        }

        console.log("mon count : ",localStorage.getItem("count"));

        let compteur = parseInt(localStorage.getItem("count"));


        for (let i = 0; i < compteur; i++) {

            if (localStorage.getItem("todo".concat(i)) != null) {

                let div = document.createElement("div");

                div.setAttribute("id", "div".concat(i));
                

                div.setAttribute("style", "position:relative;");

        

                liste.appendChild(div);
                
                let li = document.createElement("li");

                li.setAttribute("id", "todo".concat(i));
                li.setAttribute("class", "");

                li.setAttribute("style", "position:relative;");


                let input = document.createElement("input");
                input.setAttribute("type", "button");
                input.setAttribute("value", "X");
                input.setAttribute("class", "btn btn-danger");
                input.setAttribute("style", "margin-right:2vh;");

                let cros=document.createElement("input");
                cros.setAttribute("type","button");
                cros.setAttribute("id","cross");
                cros.setAttribute("class","btn btn-danger");
                cros.setAttribute("value","X");
                cros.setAttribute("style","position:relative;float:left;margin-right:2vh; width:4vh");


                div.appendChild(cros);

                li.innerHTML = localStorage.getItem("todo".concat(i));


    
                cros.after(li);


                //div listener

                li.addEventListener("click",function() {

                    if (li.getAttribute("class") == ("")) {
                        li.setAttribute("class","list-group-item-success");
                    } else {
                        li.setAttribute("class","");
                    }
                    
                });

                cros.addEventListener("click", function () {
                
                        localStorage.removeItem("todo".concat(i));
                        localStorage.setItem("count",localStorage.getItem("count")-1);
                        location.reload();
                    }
                );

                //  li.after(cross);

            } else {
                continue;
            }
    
        }
    
    }

    function findBook (l,liste) {
        for (let i of liste) {
            if (l === i) {
                return i;
            }
        }

        return false;
    }

    console.log(findBook("l","lrerzr"));

    //fonction ancienne
    // function handleToDo() {

    //     let my_json = localStorage.getItem("list");

    //     let my_obj = JSON.parse(my_json);

    //     console.log(my_obj);

    //     let li = document.createElement("li");

    //     li.innerHTML = my_obj.name + " " + my_obj.age;
    // }

}