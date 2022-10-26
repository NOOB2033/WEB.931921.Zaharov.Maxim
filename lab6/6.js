function left() {
    document.querySelector('.dog').style.display = "none";
    document.querySelector('.cat').style.display = "block";
    document.querySelector('.left').style.width = "95%";
    document.querySelector('.right').style.width = "5%";
    document.querySelector('.cat').style.width = "600px";
}

function mid() {
    document.querySelector('.cat').style.display = "block";
    document.querySelector('.dog').style.display = "block";

    document.querySelector('.cat').style.width = "410px";
    document.querySelector('.dog').style.width = "410px";

    document.querySelector('.left').style.width = "50%";
    document.querySelector('.right').style.width = "50%";
}

function right() {
    document.querySelector('.cat').style.display = "none";
    document.querySelector('.dog').style.display = "block";
    document.querySelector('.right').style.width = "95%";
    document.querySelector('.left').style.width = "5%";
    document.querySelector('.dog').style.width = "600px";
}
