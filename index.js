$(document).ready(function () {

    var textInputFile = $('#text-input-file');
    var btnGetFile = $('#get-input-file');
    var readFile = $('#read-file');

    var textRenameFile = $('#text-rename-file');
    var btnRename = $('#btn-rename');
    
    // bắt sự kiện cho button btnGetFile
    btnGetFile.click(function () {
        readFile.click();
        if ($("img").length) {
            let images = $("img");
            images.remove();
        }
    });
    
    btnGetFile.mouseleave(function () {
        if (readFile.val()) {
            var value = readFile.val();
            textInputFile.val(value);
            console.log(value);
        }
    });

    // show ảnh
    $('#read-file').change(function (e) {
        for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {

            var file = e.originalEvent.srcElement.files[i];
    
            var img = document.createElement("img");
            var reader = new FileReader();
            reader.onloadend = function() {
                 img.src = reader.result;
            }
            reader.readAsDataURL(file);
            $("#view").after(img);
        };
    });

});
