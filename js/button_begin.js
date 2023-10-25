var words_num = 1; //正在显示第几个单词

function begin() {
    console.log("button_begin!");
    words_num = 1; //begin 从1开始
    var one_row = global_file_rows[words_num];
    var words = one_row.split(',');

    //！ 初始显示
    for (var i = 0; i < words.length; i++) { 
        console.log(words[i]);
        var input_id = 'input' + (i + 1);
        var input_value = document.getElementById(input_id);
        input_value.value = words[i].trimEnd();
        value_list[i] = words[i].trimEnd(); //全局数组 用于mask
    }
    // console.log(value_list[1].length);
    // console.log(value_list[2].length);
    // console.log(value_list[3].trimEnd().length);

}