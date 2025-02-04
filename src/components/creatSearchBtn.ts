export const CreatSearchBtn = () => {
  // Skapa sökknappen
const searchBtn = document.createElement("button") as HTMLButtonElement;
searchBtn.id = "search-btn";
searchBtn.classList.add("search-btn");
searchBtn.textContent = "Search";

return searchBtn;
};