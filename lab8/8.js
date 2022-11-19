function up(line) {
    let up_element = line.parentElement.previousElementSibling;
    if (up_element) {
        line.parentElement.after(up_element);
    }
}

function down(line) {
    let down_element = line.parentElement.nextElementSibling;
    if (down_element) {
        line.parentElement.before(down_element);
    }
}

function remove(line) {
    line.parentElement.remove();
}

function add() {
    let new_element = document.querySelector(".None").cloneNode(true);
    new_element.style.display = "flex";
    new_element.className = "Element";
    document.querySelector(".Elements").appendChild(new_element);
}

function save() {
    let result = document.querySelector(".result");
    let list = document.querySelectorAll(".Elements> .Element> input");
    let string = "{";
    for (let i = 0; i < list.length; i += 2) {
        let first = list[i].value;
        let second = list[i + 1].value;
        string += '"' + first + '":"' + second + '"';
        if (i !== list.length - 2) {
            string += ',';
        }
    }
    string += "}";
    result.innerHTML = string;
}