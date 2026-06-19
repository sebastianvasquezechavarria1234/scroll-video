const video = document.getElementById("bg-video");

video.addEventListener("loadedmetadata", () => {

    let scrollFraction = 0;

    window.addEventListener("scroll", () => {

        const maxScroll =
            document.documentElement.scrollHeight -
            window.innerHeight;

        scrollFraction = window.scrollY / maxScroll;

    });

    function updateVideo() {

        video.currentTime =
            scrollFraction * (video.duration * 0.4);

        requestAnimationFrame(updateVideo);
    }

    updateVideo();
});