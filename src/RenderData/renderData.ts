
import { resultsContainer } from "../main";
import { SWAPIResponse } from "../Types/types";



// Rendera data i DOM
export const renderData = (data: SWAPIResponse): void => {
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