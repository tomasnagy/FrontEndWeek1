/**
 * Created by Tomas on 9/23/14.
 */
document.addEventListener("DOMContentLoaded", init);

function init() {
    var btn = document.getElementById("btnSubmit");
    btn.addEventListener("click", btnClicked);
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
