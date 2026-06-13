console.log("AI Prompt Vault Loaded");

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});

const searchButton =
document.querySelector(".search-btn");

const searchInput =
document.querySelector(".search-input");

if (searchButton && searchInput) {

    searchButton.addEventListener("click", () => {

        const searchTerm =
        searchInput.value.toLowerCase();

        const cards =
        document.querySelectorAll(".card");

        let results = 0;

        cards.forEach(card => {

            const text =
            card.innerText.toLowerCase();

            if (text.includes(searchTerm)) {

                card.style.display = "block";

                results++;

            } else {

                card.style.display = "none";

            }

        });

        if (results === 0) {

            alert(
                "No matching tools or prompts found."
            );

        }

    });

}
