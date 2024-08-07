document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('scroll-container');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    // Function to scroll left
    function scrollLeft() {
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        scrollContainer.scrollBy({
            left: -scrollContainer.clientWidth / 2, // Adjust the scroll amount as needed
            behavior: 'smooth'
        });

        // Disable the prev button if at the start
        if (scrollContainer.scrollLeft - scrollContainer.clientWidth / 2 <= 0) {
            prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }

        // Enable the next button if not at the end
        if (scrollContainer.scrollLeft < maxScrollLeft) {
            nextButton.disabled = false;
        }
    }

    // Function to scroll right
    function scrollRight() {
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        scrollContainer.scrollBy({
            left: scrollContainer.clientWidth / 2, // Adjust the scroll amount as needed
            behavior: 'smooth'
        });

        // Disable the next button if at the end
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth / 2 >= maxScrollLeft) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
        }

        // Enable the prev button if not at the start
        if (scrollContainer.scrollLeft > 0) {
            prevButton.disabled = false;
        }
    }

    // Add event listeners to the buttons
    prevButton.addEventListener('click', scrollLeft);
    nextButton.addEventListener('click', scrollRight);

    // Initial check to set button states
    if (scrollContainer.scrollLeft <= 0) {
        prevButton.disabled = true;
    }
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        nextButton.disabled = true;
    }
});
