export const creatResultsContainer = () => {
  // Skapa en div för att visa resultaten
  const resultsContainer = document.createElement("div") as HTMLDivElement;
  resultsContainer.id = "results";
  resultsContainer.classList.add("results-container");
  return resultsContainer;
};