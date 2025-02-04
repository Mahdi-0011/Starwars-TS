# Starwars-TS

Star Wars Info

###Beskrivning
Ett webbprojekt som använder SWAPI (Star Wars API) för att söka efter information om Star Wars-universumet. Användaren kan söka efter karaktärer, filmer, planeter, arter, fordon och rymdskepp.

###Installation och körning
1. Klona ner projektet
git clone https://github.com/Mahdi-0011/Starwars-TS.git
terminal: cd star-wars-info

2. Installera beroenden
terminal: npm install

3. Starta projektet
terminal: npm run dev
Du kan köra projektet med cntrl+click på länken  http://localhost:5173/.

###Projektstruktur
src
API {fetchDataFromAPI}
blider {
  headerbild
  backgrundbild
}
Components {
  categorySelect.ts
  creatheaderAndH1.ts
  creatResultContainer.ts
  creatSearchBtn.ts
  creatSearchContainer.ts
  creatSearchInput.ts
}
RenderData {
  renderData.ts
}
SearchBtnEvenetListener {
  SearchBtnEvenetListener.ts
}
styles {
  Abstracts {
    index.scss
    mixin.scss
    variables.scss
  }

  base.scss
  header.scss
  resluts.scss
  index.scss
}
Types {
  types.ts
}

main.ts
style.scss
index.html
readme.md

###API-anrop
Projektet använder SWAPI (https://swapi.dev/) för att hämta information. Exempel på API-anrop:
https://swapi.dev/api/people/?search=luke
https://swapi.dev/api/films/?search=empire
https://swapi.dev/api/planets/?search=tatooine

###Använda teknologier
TypeScript 
SCSS (SASS) 
Ajax

###Kontakt
LinkedIn: https://www.linkedin.com/in/mahdi-mousavi-54339b202/

