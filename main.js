var SpeechRecognition=window.SpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);

    var Content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    console.log(Content);
    speak();
}

function speak() {
    var synth=window.speechSynthesis;
    speakdata=document.getElementById("textbox").value;
    var utter=new SpeechSynthesisUtterance(speakdata);
    synth.speak(utter);
    Webcam.attach(camera);
}

Webcam.set({
    widthP:360,
    height:250,
    image_format:"png",
    png_quality:100
});

camera=document.getElementById("camera");