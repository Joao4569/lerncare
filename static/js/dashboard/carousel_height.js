function setCarouselHeight() {

    // Get the viewport height
    let viewportHeight = window.innerHeight;

    // Get the heights of non carousel elements
    let nonCarouselElements = document.querySelectorAll('.non-carousel');

    // Set the initial height of nonCarouselElementHeights
    let nonCarouselElementHeights = 0;

    // Calculate the total viewport height of non carousel elements
    nonCarouselElements.forEach(function(element) {
        nonCarouselElementHeights += element.offsetHeight;
    });

    // Calculate the remaining viewport height
    let remainingVheight = viewportHeight - nonCarouselElementHeights;

    // Set the height of the .carousel-container
    let carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.height = remainingVheight + 'px';
};

setCarouselHeight();
