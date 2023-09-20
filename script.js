// script.js
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
}

function performSearch() {
    const searchInput = document.getElementById("searchInput");
    const query = searchInput.value;
    if (query.trim() !== "") {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = searchUrl;
    }
}

// Update the clock every second
setInterval(updateTime, 1000);

// Add an event listener for the search input
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        performSearch();
    }
});
