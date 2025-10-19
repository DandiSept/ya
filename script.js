function openImage(src, caption) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = src;
  captionText.textContent = caption;
}

function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}
