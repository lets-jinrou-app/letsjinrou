var unityContainer = null;

function handleResize() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    unityContainer.style.height = windowHeight+"px";
}

document.addEventListener("DOMContentLoaded", function(event) {
    unityContainer = document.body.querySelector("#unity-container");
    window.addEventListener("resize", handleResize);
    handleResize();
});
