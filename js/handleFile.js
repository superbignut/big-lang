var global_file_rows;

function filed() {
    document.getElementById('files').click(); //模拟点击 
}

function fileImport() {
    var selectedFile = document.getElementById('files').files[0];
    console.log("name is :", selectedFile.name);
    console.log("size is :", selectedFile.size);

    var reader = new FileReader();
    reader.readAsText(selectedFile,'utf-8');

    reader.onload = function() {
        var content = this.result;
        var rows = content.split('\n');   
        global_file_rows = rows;
    };
}