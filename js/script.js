/**
 * Created by Tomas on 9/23/14.
 */
//document.addEventListener("DOMContentLoaded", init);


var input = document.getElementsByTagName("input");

init();

function init() {
    var btn = document.getElementById("btnSubmit");
    btn.attachEvent("onclick", btnClicked);

    if(checkPlaceholderExistence()) {
        for(var i = 0; i < input.length; i++) {
            input[i].attachEvent("onblur", function() {
                console.log(input[i]);
                if(input[i].value === "") {
                    console.log(this);
                    var message = input[i].getAttribute("data-placeholder");
                    input[i].value = message;
                }
            });
            input[i].attachEvent("onfocus", function() {
                input[i].value = "";
            });
        }
    }


}

function btnClicked() {
    var name = document.getElementById("name");
    var lastname = document.getElementById("lastname");

    if(name.value === "") {0
        name.className = "error";
    }

    if(lastname.value === "") {
        lastname.className = "error";
    }
}

function checkPlaceholderExistence() {
    if(!Modernizr.input.placeholder) {
        document.createElement("data-placeholder");


        for(var i = 0; i < input.length; i++) {
            if(input[i].value === "") {
                var message = input[i].getAttribute("data-placeholder");
                input[i].value = message;
            }
        }
        return true;
    }
}

function onInputExit(variable) {
    console.log("blur");
    if(variable.value === "") {
        console.log(this);
        var message = variable.getAttribute("data-placeholder");
        variable.value = message;
    }
}

function inputFocus(variable) {
    variable.value = "";
}

