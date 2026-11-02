const themeButton =
document.querySelector("#themeToggle");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if
    (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "Switch to Dark Mode";
    } else {
        themeButton.textContent = "Switch to Light Mode";
    }
});