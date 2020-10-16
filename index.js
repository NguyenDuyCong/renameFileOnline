$(document).ready(function () {

    var textInputFile = $('#text-input-file');
    var readFile = $('#read-file');
    var btnGetFile = $('#get-input-file');
    
    var textRenameFile = $('#text-rename-file');
    var btnRename = $('#btn-rename');
    
    // bắt sự kiện cho button btnGetFile
    btnGetFile.click(function () {
        readFile.click();
    });
    
    btnGetFile.mouseleave(function () {
        if (readFile.val()) {
            var value = readFile.val();
            console.log(typeof value);
            textInputFile.val(value);
        }
    });
    
    
});
