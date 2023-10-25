var temp_state = "normal"; // 当前是正在输入：normal，还是查看结果：check


document.addEventListener('DOMContentLoaded', () => {
    var inputElement = document.getElementById('input5');
    // 添加 keydown 事件监听器
    inputElement.addEventListener('keydown', function (event) {
        var input_id = event.target.id; // input5
        var input_list = ["input1", "input2", "input3", "input4"];
        var input_value = document.getElementById(input_id).value.trimEnd(); //去掉空格

        if (temp_state == "normal") {   //如果是在 输入模式 按下回车

            if (event.key === 'Enter') {
                

                // 简单判断输入是否正确
                if (value_list.includes(input_value)) { //正确 
                    for (var i = 0; i < input_list.length; i++) {
                        if (isCleared[i] == true) {
                            show_right_answer(input_list[i], i);
                        }
                    }
                } else { //错误
                    for (var i = 0; i < input_list.length; i++) {
                        if (isCleared[i] == true) {
                            show_false_answer(input_list[i], i);
                        }
                    }
                }

                // 进入 check模式
                temp_state = "check";
            }
        }
        else { // 在check模式按下回车
            if (event.key === 'Enter') {
                if (value_list.includes(input_value) || input_value == "1") { //check模式 只有输入正确，才能切换下一个 和进入normal

                    for (var i = 0; i < input_list.length; i++) {
                        if (isCleared[i] == true) {
                            clear_answer(input_list[i], i);
                        }
                    }
                    // 进入 normal模式
                    temp_state = "normal";
                    //清空当前输入栏
                    inputElement.value = "";
                    //更新单词
                    update_words();
                }
                else{
                    console.log(input_value.length, "is not", value_list[3].length);
                }

            }

        }

    });
});


function show_right_answer(elem, ele_num) {
    console.log("yes!!", elem);
    document.getElementById(elem).value = value_list[ele_num];
    document.getElementById(elem).style.backgroundColor = '	#90EE90';
}

function show_false_answer(elem, ele_num) {
    console.log("no!!", elem);
    document.getElementById(elem).value = value_list[ele_num];
    document.getElementById(elem).style.backgroundColor = '	#F08080';
}
function clear_answer(elem, ele_num) {
    console.log("clear!!", elem);
    document.getElementById(elem).value = '';
    document.getElementById(elem).style.backgroundColor = '';
}

function update_words() {
    words_num++;
    var one_row = global_file_rows[words_num];
    var words = one_row.split(',');

    //！ 初始显示
    for (var i = 0; i < words.length; i++) { 

        var input_id = 'input' + (i + 1);

        var input_value = document.getElementById(input_id);
        if(isCleared[i] == false){
            input_value.value = words[i].trimEnd(); // 不遮挡
        }
        value_list[i] = words[i].trimEnd(); //全局数组 用于mask
    }
}