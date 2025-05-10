function fetchHindiJoke() {
    fetch("https://v2.jokeapi.dev/joke/Any?lang=hi")
        .then(response => response.json())
        .then(data => {
            const jokeContainer = document.getElementById("jokeContainer");

            // If joke type is two-part
            if (data.type === "twopart") {
                jokeContainer.innerHTML = `
                    <p><strong>जोक:</strong> ${data.setup}</p>
                    <p><strong>जवाब:</strong> ${data.delivery}</p>
                `;
            } 
            // If joke is a single part
            else if (data.type === "single") {
                jokeContainer.innerHTML = `<p>${data.joke}</p>`;
            } 
            // If the API doesn't return a joke
            else {
                jokeContainer.innerHTML = "<p>अज्ञात जोक प्रकार।</p>";
            }
        })
        .catch(error => {
            console.error("Error fetching joke:", error);
            document.getElementById("jokeContainer").innerHTML = "<p>नेटवर्क त्रुटि।</p>";
        });
}

// Call the function to fetch the joke when the page loads
window.onload = fetchHindiJoke;
