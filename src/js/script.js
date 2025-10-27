// Get the current year
const startYear = 2025;
const currentYear = new Date().getFullYear();
document.getElementById("year-range").textContent =
  currentYear > startYear ? `${startYear}–${currentYear}` : `${startYear}`;

// Language Selector
const languageSelect = document.getElementById("language-select");
languageSelect.addEventListener("change", function () {
  const selectedLanguage = languageSelect.value;
  if (selectedLanguage === "dansk") {
    window.location.href =
      "https://mosberg.github.io/MosbergELogVVS.Github.io/";
  } else if (selectedLanguage === "engelsk") {
    window.location.href =
      "https://mosberg.github.io/MosbergELogVVS.Github.io/";
  }
});

// Sticky Header & Footer
const header = document.querySelector("header");
const footer = document.querySelector("footer");
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("sticky");
    footer.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    footer.classList.remove("sticky");
  }
});

// Smooth Scroll
const links = document.querySelectorAll("a[href^='#']");
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
