export class Zoomed {
    constructor() {
      this.initZoomEffect();
    }
  
    initZoomEffect() {
      document.addEventListener("DOMContentLoaded", () => {
        const zoomedImage = document.getElementById("zoomed-image");
  
        if (zoomedImage) {
          zoomedImage.classList.add("zoomed");
  
          setTimeout(() => {
            zoomedImage.classList.remove("zoomed");
          }, 1000);
        }
      });
    }
  }