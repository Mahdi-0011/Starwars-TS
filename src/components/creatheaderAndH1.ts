
export const CreatHeader = () => {
  // Skapa headern
  const header = document.createElement("header") as HTMLHeadElement;
  header.classList.add("header");
  return header;
};
export const creatH1 = () => {
  // Skapa H1 för titeln
  const h1 = document.createElement("h1") as HTMLElement;
  h1.textContent = "Star Wars Info";
  h1.className = "h1";
  return h1;
};