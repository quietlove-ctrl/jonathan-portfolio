// ========================================
// 1. THEME SWITCHER
// ========================================

const themeButton = document.querySelector("#themeToggle");

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeButton.textContent = "Switch to Dark Mode";
        } else {
            themeButton.textContent = "Switch to Light Mode";
        }
    });
}


// ========================================
// 2. SCROLL PROGRESS BAR
// ========================================

const progressBar = document.createElement("div");

progressBar.className = "scroll-progress";

document.body.appendChild(progressBar);

function updateProgressBar() {
    const scrollTop = window.scrollY;

    const scrollHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = scrollHeight > 0
        ? (scrollTop / scrollHeight) * 100
        : 0;

    progressBar.style.width = progress + "%";
}

window.addEventListener("scroll", updateProgressBar);

window.addEventListener("resize", updateProgressBar);

updateProgressBar();


// ========================================
// 3. SCROLL REVEAL ANIMATION
// ========================================

const elements = document.querySelectorAll(
    "main section:not(#Home), .skill-card, .project-card"
);

elements.forEach((element) => {
    element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });

} else {

    elements.forEach((element) => {
        element.classList.add("visible");
    });

}


// ========================================
// 4. REDUCE ANIMATIONS WHEN REQUESTED
// ========================================

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

if (prefersReducedMotion.matches) {
    elements.forEach((element) => {
        element.classList.add("visible");
    });
}
