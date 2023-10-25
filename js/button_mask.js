
var isCleared = [false, false, false, false];
var value_list = ["", "", "", ""];

function mask(buttonElement) {
    var button_id = buttonElement.id;
    var num = Number(button_id.charAt(button_id.length - 1)) - 1;
    var map_input = document.getElementById("input" + (num + 1));

    if (isCleared[num] == false) {
        buttonElement.style.backgroundColor = '#FFDEAD';
        map_input.value = "";
        isCleared[num] = true;
    }
    else {
        buttonElement.style.backgroundColor = "";
        map_input.value = value_list[num];
        isCleared[num] = false;
    }
}