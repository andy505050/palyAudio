$(function () { 
    audioBtnBind();
});

function CallAudio() {
    audioBtnUnbind();
    document.getElementById("filename").innerHTML = "Loading";
    $.ajax(
        {
            url: 'callback.txt',
            async: false,//for IE
            success: playAudio,
            error: function () {
                window.location.reload();
            }
        }
    )
}

function audioBtnBind(){
    $("#audioBtn").on("click", CallAudio);
    $("#audioBtn").on("keyPress", CallAudio);
}

function audioBtnUnbind(){
    $("#audioBtn").unbind("click", CallAudio);
    $("#audioBtn").unbind("keyPress", CallAudio);
}