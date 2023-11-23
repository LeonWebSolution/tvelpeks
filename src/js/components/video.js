var playButton = document.getElementById('playButton');
var myVideo = document.getElementById('myVideo');
var videoBlur = document.querySelector('.words__video-blur');
var videoBtn = document.querySelector('.words__video-btn');

playButton.addEventListener('click', function () {
    if (myVideo.paused) {
        myVideo.play();
        videoBlur.classList.add('hidden');
        videoBtn.classList.add('hidden');
    } else {
        myVideo.pause();
        videoBlur.classList.remove('hidden');
        videoBtn.classList.remove('hidden');
    }
});