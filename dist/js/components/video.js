export class Video {
    constructor() {
        this.playButton = document.getElementById('playButton');
        this.myVideo = document.getElementById('myVideo');
        this.videoBlur = document.querySelector('.words__video-blur');
        this.videoBtn = document.querySelector('.words__video-btn');

        // Проверяем, существуют ли элементы, прежде чем добавить обработчик событий click
        if (this.playButton && this.myVideo && this.videoBlur && this.videoBtn) {
            this.playButton.addEventListener('click', () => {
                this.toggleVideoPlayback();
            });
        }
    }

    toggleVideoPlayback() {
        if (this.myVideo.paused) {
            this.myVideo.play();
            if (this.videoBlur) {
                this.videoBlur.classList.add('hidden');
            }
            if (this.videoBtn) {
                this.videoBtn.classList.add('hidden');
            }
        } else {
            this.myVideo.pause();
            if (this.videoBlur) {
                this.videoBlur.classList.remove('hidden');
            }
            if (this.videoBtn) {
                this.videoBtn.classList.remove('hidden');
            }
        }
    }
}
