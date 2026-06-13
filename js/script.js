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

const searchButton = document.querySelector(".search-btn");

if(searchButton){

    searchButton.addEventListener("click", () => {

        const searchInput =
        document.querySelector(".search-input");

        const query =
        searchInput.value;

        alert("Search feature coming soon: " + query);

    });

}
