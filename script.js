const playButton = document.getElementById("playButton");
    const videoPopup = document.getElementById("videoPopup");

    playButton.addEventListener("click", () => {
        videoPopup.style.display = "block";
    });

    videoPopup.addEventListener("click", (event) => {
        if (event.target === videoPopup) {
            videoPopup.style.display = "none";
        }
    });