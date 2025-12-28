const thumbnails = document.querySelectorAll("img[data-pdf]");
const viewer = document.getElementById("PDF");
const x = document.getElementById("x");

thumbnails.forEach(thumb => {
    thumb.addEventListener("click", () => {
        viewer.src = thumb.getAttribute("data-pdf"); // always doc1.pdf in your case
        viewer.style.display = "block";
        x.style.display = "block";
    });
});

x.addEventListener("click", () => {
    viewer.style.display = "none";
    viewer.src = "";
    x.style.display = "none";
});
