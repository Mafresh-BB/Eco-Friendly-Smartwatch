document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.getElementById("cta-btn");

    ctaButton.addEventListener("mouseover", () => {
        ctaButton.style.backgroundColor = "#fbc02d";
    });

    ctaButton.addEventListener("mouseout", () => {
        ctaButton.style.backgroundColor = "#ffeb3b";
    });

    ctaButton.addEventListener("click", () => {
        alert("Thank you for your interest! Pre-orders will open soon.");
    });
});
