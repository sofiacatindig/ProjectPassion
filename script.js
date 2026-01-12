document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll("img[data-pdf]");
  const viewer = document.getElementById("PDF");
  const closeBtn = document.getElementById("x");

  if (!viewer || !closeBtn) {
    console.error("Missing #PDF iframe or #x close button in HTML");
    return;
  }

  thumbnails.forEach(thumb => {
    thumb.addEventListener("click", () => {
      viewer.src = thumb.dataset.pdf;
      viewer.style.display = "block";
      closeBtn.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    viewer.style.display = "none";
    viewer.src = "";
    closeBtn.style.display = "none";
  });
});
