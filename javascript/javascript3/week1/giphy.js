"use stict";

const input = document.querySelector("#searchWord");
const number = document.querySelector("#number");
const btn = document.querySelector("#searchBtn");

btn.addEventListener("click", gifSearch);
number.addEventListener("keyup", enterPressed);

function enterPressed(event) {
  if (event.key !== "Enter") return;
  else if (number.value === "") {
    document.body.innerText = "add number of gifs to display name";
    return;
  }
  gifSearch();
}

function gifSearch() {
  const searchedWord = input.value;
  const numberOfGif = number.value;
  const url = `http://api.giphy.com/v1/gifs/search?q=${searchedWord}&api_key=8Z83DoNxjr9BUrHOrEt2xr4ZYFxodA6Z&limit=${numberOfGif}`;
  fetch(url)
    .then((response) => response.json())
    .then((giphyData) => {
      //console.log(giphyData);
      renderRetrievedData(giphyData.data);
    });
}

function renderRetrievedData(items) {
  const searchResult = document.querySelector("#searchResult");
  searchResult.innerHTML = "";
  items.forEach((element) => {
    const searchItem = document.createElement("li");
    searchItem.innerHTML = `<img src="${element.images.original.url}">`;
    searchResult.appendChild(searchItem);
  });
}
