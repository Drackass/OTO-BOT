// once
var Frames = 0;
var xEye = 50;
var yEyeAfter
var yEye = 50;
var xEyeAfter
const Eyes = document.getElementsByClassName("eye");
var RGB = '190,111,2';
// 190,11,2 / 20,192,18

var audioMove = new Audio('move.wav');
var audioEye = new Audio('eye.wav');
var audioColor = new Audio('color.wav');
var audioPower = new Audio('power.wav');

setInterval(() => {
    // loop
    Frames++;

    if (Math.random() < 0.005) {
        xEye = getRandomArbitrary(-15, 15) + 50;
        yEye = getRandomArbitrary(-15, 15) + 50;
        xEyeAfter = xEye + Math.random() * .5;
        yEyeAfter = yEye + Math.random() * .5;
        audioMove.currentTime = 0;
        audioMove.play();

    }

    if (Frames % 10 === 0) {
        xEyeAfter = xEye + Math.random() * .5;
        yEyeAfter = yEye + Math.random() * .5;
    }

    for (let i = 0; i < Eyes.length; i++) {
        let eyeOpacity = (Math.abs(Math.sin(Frames * 0.01) * 0.6)) + 0.4;
        Eyes[i].style = 'top: ' + yEyeAfter + '%; left: ' + xEyeAfter + '%; opacity: ' + eyeOpacity + '; background-color: rgb(' + RGB + ');';
    }

}, 0);


// Random min max
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

// Keyboard detection
document.addEventListener("keyup", function (event) {

    switch (event.key) {
        case '1':
            let R = Math.random() * 255;
            let G = Math.random() * 255;
            let B = Math.random() * 255;
            RGB = R + ',' + G + ',' + B;
            audioColor.currentTime = 0;
            audioColor.play();
            break;
        case '2':
            for (let i = 0; i < Eyes.length; i++) {
                Eyes[i].classList.toggle('eye-closed');
                audioEye.currentTime = 0;
                audioEye.play();
            }
            break;

        case '3':
            for (let i = 0; i < Eyes.length; i++) {
                Eyes[i].classList.toggle('off');
                audioPower.currentTime = 0;
                audioPower.play();
            }
            break;




        default:
            break;
    }



});


// var sTopic = "";
// if (top.location.href.lastIndexOf("?") > 0)
//     sTopic = top.location.href.substring(top.location.href.lastIndexOf("?") + 1, top.location.href.length);
// if (sTopic == "") sTopic = "Partie1LesbaseduJavaScript.html";
// document.write('<frameset cols="300,*">');
// document.write('<frame src="toc.html" name="FrameTOC">');
// document.write('<frame src="' + sTopic + '" name="FrameMain">');
// document.write('</frameset>');
