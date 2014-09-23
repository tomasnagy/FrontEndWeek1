/**
 * Created by Tomas on 9/23/14.
 */
document.addEventListener("DOMContentLoaded", init);

function init() {
    var btn = document.getElementById("btnSubmit");
    btn.addEventListener("click", btnClicked);

    if(checkPlaceholderExistence()) {
        var input = document.getElementsByTagName("input");
        input.attachEvent("onblur", onInputExit);
        input.attachEvent("focus", inputFocus);
    }


}

function btnClicked() {
    var name = document.getElementById("name");
    var lastname = document.getElementById("lastname");

    if(name.value === "") {
        name.className = "error";
    }

    if(lastname.value === "") {
        lastname.className = "error";
    }
}

function checkPlaceholderExistence() {
    if(!Modernizr.input.placeholder) {
        document.createElement("data-placeholder");
       var input = document.getElementsByTagName("input");

        for(var i = 0; i < input.length; i++) {
            if(input[i].value === "") {
                var message = input[i].getAttribute("data-placeholder");
                input[i].value = message;
            }
        }
        return true;
    }
}

function onInputExit() {
    if(this.value === "") {
        var message = this.getAttribute("data-placeholder");
        this.value = message;
    }
}

function inputFocus() {
    this.value = "";
}

