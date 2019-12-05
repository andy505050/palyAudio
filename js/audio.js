var index = 0;
var playlist = [];
var audio = document.createElement('audio');
var IntervalControl;

window.onload = function () {
    audio.addEventListener("error", nextAudio, false);
}

function playAudio(input) {
    playlist = [];
    for (var i = 0; i < input.length; i++) {
        playlist[i] = "wav/" + input[i] + ".mp3";
    }
    IntervalControl = setInterval(nextAudio, 1000);
}

function nextAudio() {
    if (index >= playlist.length) {
        document.getElementById("filename").innerHTML = "Finished";
        window.clearInterval(IntervalControl);
        index = 0;
        audioBtnBind();
    }
    else {
        document.getElementById("filename").innerHTML = "Playing";
        audio.src = playlist[index];
        audio.play();
        index++;
    }
}