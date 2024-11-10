document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll(".slider, .product-slider");
    sliders.forEach(slider => {
        let scrollAmount = 0;
        setInterval(() => {
            slider.scrollBy({ left: slider.offsetWidth, behavior: "smooth" });
            scrollAmount += slider.offsetWidth;
            if (scrollAmount >= slider.scrollWidth) scrollAmount = 0;
        }, 4000);
    });
});

// Toggle mobile menu
function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
}

// Example function to dynamically update cart count
function updateCartCount(count) {
    document.getElementById("cart-count").innerText = count;
}

// Example of updating cart count (you can replace this with actual cart logic)
updateCartCount(3);
