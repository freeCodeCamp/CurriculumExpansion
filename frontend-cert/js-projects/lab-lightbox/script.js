// Get references to the elements
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.getElementById("close");

// Function to open the lightbox
function openLightbox(src) {
  lightboxImage.src = src;
  lightbox.style.display = "flex"; // Show the lightbox
}

// Function to close the lightbox
function closeLightbox() {
  lightbox.style.display = "none"; // Hide the lightbox
}

// Add event listener to the close button
closeButton.addEventListener("click", closeLightbox);

// Add event listener to the lightbox background
  lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox(); // Close lightbox if clicking outside the image
  }
});

// Add event listeners to gallery items
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    openLightbox(item.src.replace("-thumbnail", "")); // Open lightbox with the full image
  });
});
