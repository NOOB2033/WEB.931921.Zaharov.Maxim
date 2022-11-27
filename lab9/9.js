function Equal() {
    let value = document.querySelector(".input").value;
    document.querySelector(".input").value = eval(value);
}

function Clear() {
    document.querySelector(".input").value = "";
}

function Digit(value) {
    document.querySelector(".input").value = document.querySelector(".input").value + value;
}

function Operation(value) {
    let operatinos = ['-', '+', '*', '/'];
    let end = document.querySelector(".input").value.slice(-1);
    if (end == '') {
        return;
    }
    if (operatinos.indexOf(end) != -1) {
        let str = document.querySelector(".input").value;
        document.querySelector(".input").value = str.substring(0, str.length - 1);
    }
    document.querySelector(".input").value = document.querySelector(".input").value + value;
}

function Delete_Symbol() {
    let value = document.querySelector(".input").value;
    document.querySelector(".input").value = value.substring(0, value.length - 1);
}

function Point() {
    let bad_values = ['-', '+', '*', '/', '.', ''];
    let end = document.querySelector(".input").value.slice(-1);
    if ((bad_values.indexOf(end) != -1) || contains_point()) {
        return;
    } else {
        document.querySelector(".input").value = document.querySelector(".input").value + '.';
    }
}

function contains_point() {
    let str = document.querySelector(".input").value;
    let end = str.slice(-1);
    if (end == '.') {
        return true;
    }
    let bad_values = ['-', '+', '*', '/', ''];
    while (bad_values.indexOf(end) == -1) {
        str = str.substring(0, str.length - 1);
        end = str.slice(-1);
        if (end == '.') {
            return true;
        }
    }
    return false;
}