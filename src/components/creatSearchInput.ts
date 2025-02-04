export const creatSearchInput = () => {
// Skapa sökfältet (input)
  const searchInput = document.createElement("input") as HTMLInputElement;
  searchInput.type = "text";
  searchInput.id = "search";
  searchInput.classList.add("search-input");
  searchInput.placeholder = "Search Star Wars Universe";
  searchInput.setAttribute("aria-label", "Search");
  
  return searchInput;
};