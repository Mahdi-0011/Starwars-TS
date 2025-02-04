import { fetchDataFromAPI } from "../API/fetchDataFromApi";
import { searhBtn } from "../main";
import { renderData } from "../RenderData/renderData";


// Eventlistener för sökknappen
  export const searchBtnAddEvenetListener = () => {searhBtn.addEventListener("click", async () => {

  const searchInput = document.querySelector(".search-input") as HTMLInputElement;
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
});};