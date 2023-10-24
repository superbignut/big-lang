function begin() {
    console.log("button_begin!");
    var one_row = global_file_rows[1];
    var words = one_row.split(',');

    for (var i = 0; i < words.length; i++) {
        console.log(words[i]);
        var input_id = 'input' + (i + 1);
        var input_value = document.getElementById(input_id);
        input_value.value = words[i];
    }


}