document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const countrySections = document.querySelectorAll(".country-section");
    const searchInput = document.getElementById("search-input");
    const allArticles = document.querySelectorAll(".article-item");

    /**
     * Function to filter articles by country.
     * @param {String} filterValue - The value of the filter (country name or 'all').
     */
    function filterByCountry(filterValue) {
        countrySections.forEach(section => {
            if (filterValue === "all" || section.id === filterValue) {
                section.style.display = "block"; // Show the section
            } else {
                section.style.display = "none"; // Hide the section
            }
        });
    }

    /**
     * Function to handle search functionality. Filters articles by their title.
     */
    function searchArticles() {
        const searchTerm = searchInput.value.toLowerCase();

        allArticles.forEach(article => {
            const articleTitle = article.querySelector("h3").textContent.toLowerCase();

            if (articleTitle.includes(searchTerm)) {
                article.style.display = "block"; // Show matching articles
            } else {
                article.style.display = "none"; // Hide non-matching articles
            }
        });

        // Hide sections that have no visible articles
        countrySections.forEach(section => {
            const visibleArticles = section.querySelectorAll(".article-item[style*='block']");
            section.style.display = visibleArticles.length ? "block" : "none";
        });
    }

    /**
     * Event listener for filter buttons to filter articles by country.
     */
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove the active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            
            // Add the active class to the clicked button
            button.classList.add("active");

            // Filter articles by the selected country
            const filterValue = button.getAttribute("data-filter");
            filterByCountry(filterValue);
        });
    });

    /**
     * Event listener for search input to filter articles by the search term.
     */
    searchInput.addEventListener("keyup", searchArticles);

    // Initialize the page by showing all countries (default 'All' filter)
    filterByCountry("all");
});
