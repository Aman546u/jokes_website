function fetchHindiJoke() {
    fetch("https://v2.jokeapi.dev/joke/Any?lang=hi&type=single")  // Fetch Hindi jokes from JokeAPI
        .then(response => response.json())
        .then(data => {
            const jokeContainer = document.getElementById("jokeContainer");

            // If joke type is single
            if (data.type === "single") {
                jokeContainer.innerHTML = `<p><strong>जोक:</strong> ${data.joke}</p>`;
            } 
            // If joke is two-part
            else if (data.type === "twopart") {
                jokeContainer.innerHTML = `
                    <p><strong>जोक:</strong> ${data.setup}</p>
                    <p><strong>जवाब:</strong> ${data.delivery}</p>
                `;
            } 
            // If the joke format is unknown
            else {
                jokeContainer.innerHTML = "<p>अज्ञात जोक प्रकार।</p>";
            }
        })
        .catch(error => {
            console.error("Error fetching joke:", error);
            document.getElementById("jokeContainer").innerHTML = "<p>नेटवर्क त्रुटि।</p>";
        });
}

window.onload = fetchHindiJoke;

