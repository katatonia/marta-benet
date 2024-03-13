const section = document.querySelector(".purchase__wrapper");
const imageLeft = document.querySelector(".purchase__img_left");
const imageRight = document.querySelector(".purchase__img_right");

// Function to handle intersection changes
function handleIntersection(entries) {
    entries.forEach((entry) => {
        const intersecting = entry.isIntersecting;
        imageLeft.classList.toggle("back-to-top", !intersecting);
        imageLeft.classList.toggle("to-bottom", intersecting);
        imageRight.classList.toggle("back-to-bottom", !intersecting);
        imageRight.classList.toggle("to-top", intersecting);
    });
}

// Options for the IntersectionObserver
const options = {
	threshold: 0.5, // Trigger when 50% of the block is visible
};

// Create a new IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, options);

// Start observing the block
observer.observe(section);
