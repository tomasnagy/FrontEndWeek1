/**
 * Created by Tomas on 9/23/14.
 */
//document.addEventListener("DOMContentLoaded", init);


var input = document.getElementsByTagName("input");

document.attachEvent("onreadystatechange", function(){
    if (document.readyState === "complete"){
        document.detachEvent( "onreadystatechange", arguments.callee );
        init();
    }
});

function init() {
    var btn = document.getElementById("btnSubmit");
    btn.attachEvent("onclick", btnClicked);

    if(checkPlaceholderExistence()) {
        for(var i = 0; i < input.length; i++) {
            input[i].onblur = function() {

                if(this.value === '') {
                    var message = this.getAttribute("placeholder");
                    this.value = message;
                }
            };
            input[i].onfocus = function() {
                this.value = '';
            };
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
        document.createElement("placeholder");


        for(var i = 0; i < input.length; i++) {
            if(input[i].value === "") {
                var message = input[i].getAttribute("placeholder");
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
        var message = variable.getAttribute("placeholder");
        variable.value = message;
    }
}

function inputFocus(variable) {
    variable.value = "";
}

