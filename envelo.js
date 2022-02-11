function fillform(area) {
    if(area.value == "") {
        document.getElementById("#i" +area.id).innerHTML = "To pole jest wymagane";
        return false;
    } else {
        return true
    }
}

window.onload = function () {
    document.getElementById("#form-id").onsubmit = function () {
        if (fillform(this.name)) {
            return true;
        } else {
            return false;
        }
    }
}