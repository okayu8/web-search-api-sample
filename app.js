
var btn = document.getElementById('btn');
var content = document.getElementById('content');




//音声認識APIの使用
var speech = new webkitSpeechRecognition();


//言語を日本語に設定
speech.lang = "ja";


speech.start();

/* btn.addEventListener('click', function () {
    // 音声認識をスタート
    speech.start();
}); */

function openURL(key) {
    location.href = 'https://www.google.co.jp/search?q=' + key;
}

speech.addEventListener('result', function (e) {


    var text = e.results[0][0].transcript;


    // 認識された「言葉(text)」を、表示用のdivタグに代入する
    content.textContent = text;
    openURL(text);

});
