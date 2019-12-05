$(function () { 
    audioBtnBind();
});

function CallAudio() {
    audioBtnUnbind();
    document.getElementById("filename").innerHTML = "載入中";
    playAudio($("#inputText").val());
}

function audioBtnBind(){
    $("#audioBtn").on("click", CallAudio);
    $("#audioBtn").on("keyPress", CallAudio);
}

function audioBtnUnbind(){
    $("#audioBtn").unbind("click", CallAudio);
    $("#audioBtn").unbind("keyPress", CallAudio);
}