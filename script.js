const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
let shownJokes = JSON.parse(localStorage.getItem('shownJokes')) || [];

jokeBtn.addEventListener('click', generateJoke);

async function generateJoke() {
  try {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode&type=single');
    const data = await response.json();

    if (!shownJokes.includes(data.id)) {
      jokeEl.textContent = data.joke;
      shownJokes.push(data.id);
      localStorage.setItem('shownJokes', JSON.stringify(shownJokes));
    } else {
      generateJoke(); // Fetch another joke if already shown
    }
  } catch (error) {
    jokeEl.textContent = 'Oops! Something went wrong. Try again later.';
    console.error(error);
  }
}
