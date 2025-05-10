// Function to fetch a Hindi joke from JokeAPI
function fetchHindiJoke() {
    fetch("https://v2.jokeapi.dev/joke/Any?lang=hi")
        .then(response => response.json())
        .then(data => {
            let jokeContainer = document.getElementById("jokeContainer");

            // Check if the joke is a two-part joke
            if (data.type === "twopart") {
                jokeContainer.innerHTML = `<p><strong>जोक:</strong> ${data.setup} <br> <strong>जवाब:</strong> ${data.delivery}</p>`;
            } else {
                // If it's a single joke
                jokeContainer.innerHTML = `<p>${data.joke}</p>`;
            }
        })
        .catch(error => {
            console.error("Error fetching joke:", error);
            document.getElementById("jokeContainer").innerHTML = "<p>अभी कोई जोक नहीं मिला। कृपया पुनः प्रयास करें।</p>";
        });
}

// Call the function when the page loads
window.onload = fetchHindiJoke;
