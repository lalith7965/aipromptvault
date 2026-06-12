// AI Prompt Vault JavaScript

console.log("AI Prompt Vault Loaded");

// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {
link.addEventListener("click", function (e) {

```
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });
    }

});
```

});

// Card hover animation

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

```
card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px)";
});

card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
});
```

});

console.log("Animations Ready");

