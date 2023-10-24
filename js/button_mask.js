
var isCleared = [false, false, false, false];
var value_list =["0", "1", "2", "3"];
                    
function mask(buttonElement) {
    var button_map_id = buttonElement.getAttribute('map_id')
    var num = Number(button_map_id.charAt(button_map_id.length - 1)) - 1;
    var map_input = document.getElementById(button_map_id)
    // console.log(map_input.value);
    if (isCleared[num] == false) {
        value_list[num] = map_input.value;
        map_input.value = "";
        isCleared[num] = true;
    }
    else {
        map_input.value = value_list[num];  
        isCleared[num] = false;
    }
    console.log(num);
}