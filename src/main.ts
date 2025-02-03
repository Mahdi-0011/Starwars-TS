/** @format */

import { createCategorySelect } from "./components/CategorySelect";
import "./style.scss";
import { SWAPIResponse } from "./types";

// Skapa en header och sökcontainer dynamiskt
const body = document.body as HTMLElement;

// Skapa headern
const header = document.createElement("header") as HTMLElement;
header.classList.add("header");
body.appendChild(header);

// Skapa H1 för titeln
const h1 = document.createElement("h1") as HTMLElement;
h1.textContent = "Star Wars Info";
header.appendChild(h1);

// Skapa search-container
const searchContainer = document.createElement("div") as HTMLElement;
searchContainer.classList.add("search-container");
header.appendChild(searchContainer);

// Skapa sökfältet (input)

searchContainer.appendChild(searchInput);

searchContainer.appendChild(createCategorySelect());

// Skapa sökknappen
const searchBtn = document.createElement("button") as HTMLButtonElement;
searchBtn.id = "search-btn";
searchBtn.classList.add("search-btn");
searchBtn.textContent = "Search";
searchContainer.appendChild(searchBtn);

// Funktion för att hämta data
const fetchDataFromAPI = async (url: string): Promise<SWAPIResponse | null> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("API-svaret var inte OK");
    }
    return await response.json();
  } catch (error) {
    alert(`Fel vid hämtning av data`);
    return null;
  }
};

// Skapa en div för att visa resultaten
const resultsContainer = document.createElement("div") as HTMLDivElement;
resultsContainer.id = "results";
resultsContainer.classList.add("results-container");
body.appendChild(resultsContainer);

// Rendera data i DOM
const renderData = (data: SWAPIResponse): void => {
  resultsContainer.innerHTML = "";

  // Gå igenom alla i resultatet
  data.results.forEach((item) => {
    const card = document.createElement("div") as HTMLDivElement;
    card.classList.add("cards");

    // Filmer
    if (item.title) {
      card.innerHTML = `
        <h2>${item.title}</h2>
        <p><strong>Director:</strong> ${item.director || "N/A"}</p>
        <p><strong>Producer:</strong> ${item.producer || "N/A"}</p>
        <p><strong>Release Date:</strong> ${item.release_date || "N/A"}</p>
      `;
    }
    // Personer
    else if (item.name && item.gender) {
      card.innerHTML = `
        <h2>${item.name}</h2>
        <p><strong>Gender:</strong> ${item.gender || "N/A"}</p>
        <p><strong>Birth Year:</strong> ${item.birth_year || "N/A"}</p>
        <p><strong>Height:</strong> ${
          item.height ? `${item.height} cm` : "N/A"
        }</p>
      `;
    }
    // Planeter
    else if (item.terrain) {
      card.innerHTML = `
        <h2>${item.name}</h2>
        <p><strong>Climate:</strong> ${item.climate || "N/A"}</p>
        <p><strong>Terrain:</strong> ${item.terrain || "N/A"}</p>
        <p><strong>Population:</strong> ${item.population || "N/A"}</p>
      `;
    }
    // Fordon
    else if (item.model) {
      card.innerHTML = `
        <h2>${item.name || item.model}</h2>
        <p><strong>Model:</strong> ${item.model || "N/A"}</p>
        <p><strong>Manufacturer:</strong> ${item.manufacturer || "N/A"}</p>
        <p><strong>Length:</strong> ${item.length || "N/A"} meters</p>
      `;
    }
    // Starships
    else if (item.starship_class) {
      card.innerHTML = `
        <h2>${item.name}</h2>
        <p><strong>Starship Class:</strong> ${item.starship_class || "N/A"}</p>
        <p><strong>Manufacturer:</strong> ${item.manufacturer || "N/A"}</p>
        <p><strong>Cost:</strong> ${item.cost_in_credits || "N/A"} credits</p>
      `;
    }
    // Species (Arter)
    else if (item.name || item.species_name) {
      card.innerHTML = `
        <h2>${item.species_name || item.name}</h2>
        <p><strong>Classification:</strong> ${item.classification || "N/A"}</p>
        <p><strong>Average Height:</strong> ${
          item.average_height || "N/A"
        } cm</p>
        <p><strong>Average Lifespan:</strong> ${
          item.average_lifespan || "N/A"
        } years</p>
      `;
    }

    // Lägg till kortet till resultsContainer
    resultsContainer.appendChild(card);
  });
};

// Eventlistener för sökknappen
searchBtn.addEventListener("click", async () => {
  const searchTerm: string = searchInput.value.trim();
  const categorySelect = document.querySelector(
    ".category-select"
  ) as HTMLSelectElement;
  const category: string = categorySelect.value;

  if (searchTerm) {
    const searchUrl = `https://swapi.dev/api/${category}/?search=${searchTerm}`;
    const searchData = await fetchDataFromAPI(searchUrl);

    if (searchData) {
      renderData(searchData);
    } else {
      alert("Kunde inte hämta data. Försök igen!");
    }
  } else {
    alert("Vänligen skriv något i sökfältet!");
  }
});
