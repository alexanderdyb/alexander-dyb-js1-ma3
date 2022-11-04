const apiKey = "edee90318ac5464caab996801c1cc443";

const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const moviesContainer = document.querySelector(".movies");

async function getData() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    const allData = results.results;

    moviesContainer.innerHTML = "";

    for (let i = 0; i < allData.length; i++) {
      if (i === 7) {
        break;
      }
      const name = allData[i].name;
      const rating = allData[i].rating;
      const numberTags = allData[i].tags.length;

      moviesContainer.innerHTML += `<div class="movieList">
        <p><span>Name:</span> ${name}</p> 
        <p><span>Rating:</span> ${rating}</p>
        <p><span>Number of tags:</span> ${numberTags}</p>                                        
        </div>`;
    }
  } catch (error) {
    moviesContainer.innerHTML = displayError("An error occured");
  }
}

getData();
