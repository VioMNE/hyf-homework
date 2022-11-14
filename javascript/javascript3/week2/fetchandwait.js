const fetchCountries = fetch("https://restcountries.com/v3.1/all");
setTimeout(() => {
  fetchCountries
    .then((response) => response.json())
    .then((data) => console.log(data));
}, 3000);

async function fetchCountiresUsingAsyncs() {
  try {
    const fetchCountries = await fetch("https://restcountries.com/v3.1/all");
    setTimeout(async () => {
      const data = await fetchCountries.json();
      console.log();
    }, 3000);
  } catch (error) {
    console.log(error);
  }
}

fetchCountiresUsingAsyncs();

//Which way do you prefer, the promise way or the async/await way?

// For me personaly it is easier to do promise way, because its shorter, and no need to remember await word.
