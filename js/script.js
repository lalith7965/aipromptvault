// AI Prompt Vault

console.log("AI Prompt Vault Loaded");

// Card hover enhancement

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});

// Button click feedback

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", (event) => {

        event.preventDefault();

        alert("Feature coming soon!");

    });

});
