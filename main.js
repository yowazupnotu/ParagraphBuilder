
function getPara1() {
    var inputs = [];

    for (var i = 1; i <= 5; i++) {
        inputs.push(document.getElementById("input" + i).value);
    }

    document.getElementById("para").innerHTML = inputs.join(". ");
}

function getPara2() {
    var inputs = [];

    for (var i = 6; i <= 10; i++) {
        inputs.push(document.getElementById("input" + i).value);
    }

    document.getElementById("para2").innerHTML = inputs.join(". ");
}