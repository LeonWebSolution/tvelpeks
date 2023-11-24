var playButton = document.getElementById('playButton');
var myVideo = document.getElementById('myVideo');
var videoBlur = document.querySelector('.words__video-blur');
var videoBtn = document.querySelector('.words__video-btn');

// Check if elements exist before adding the click event listener
if (playButton && myVideo && videoBlur && videoBtn) {
    playButton.addEventListener('click', function () {
        if (myVideo.paused) {
            myVideo.play();
            if (videoBlur) {
                videoBlur.classList.add('hidden');
            }
            if (videoBtn) {
                videoBtn.classList.add('hidden');
            }
        } else {
            myVideo.pause();
            if (videoBlur) {
                videoBlur.classList.remove('hidden');
            }
            if (videoBtn) {
                videoBtn.classList.remove('hidden');
            }
        }
    });
}
