// for the picture zoom in and zoom out effects the image element
const img = document.getElementById('image');
//const certiImage = document.querySelectorAll('images-container');

// Function to zoom in on mouseover
function zoomIn() {
    img.style.transform = 'scale(1.2)'; // Scale the image by 1.2 times
}

// Function to zoom out on mouseout
function zoomOut() {
    img.style.transform = 'scale(1)'; // Reset the image scale to normal
}

// Attach the functions to the corresponding events
img.onmouseover = zoomIn;
img.onmouseout = zoomOut;

// for all certificats zoom in zoom out effects when mouse is hoverover the image.
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-container img');

    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.5)';  // Zoom in on hover
        });

        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';  // Reset to original size when hover ends
        });
    });
});
















// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get all nav links
    const navLinks = document.querySelectorAll('a');


    // Add click event listener to each nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove 'active' class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));

            // Add 'active' class to the clicked link
            this.classList.add('active');


        });

    });
    console.log(navLinks);

});

