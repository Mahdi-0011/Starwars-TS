/** @format */

export const createCategorySelect = () => {
  // Skapa dropdown för kategori
  const categorySelect = document.createElement("select") as HTMLSelectElement;
  categorySelect.id = "category-select";
  categorySelect.classList.add("category-select");
  categorySelect.innerHTML = `
  <option value="people">People</option>
  <option value="films">Films</option>
  <option value="planets">Planets</option>
  <option value="species">Species</option>
  <option value="vehicles">Vehicles</option>
  <option value="starships">Starships</option>
  `;
  return categorySelect;
};
