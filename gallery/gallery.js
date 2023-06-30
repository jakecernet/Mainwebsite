image = document.getElementById("preview-image");
preview = document.getElementById("preview");

function showImage(imgName) {
    image.src = "images/" + imgName + ".jpg";
    preview.style.display = "block";
}

function closePreview() {
    preview.style.display = "none";
}