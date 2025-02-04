/** @format */

import { fetchDataFromAPI } from "./API/fetchDataFromApi";
import { createCategorySelect } from "./Components/categorySelect";
import { creatResultsContainer } from "./Components/creatResultContainer";
import { CreatSearchBtn } from "./Components/creatSearchBtn";
import { creatSearchContainer } from "./Components/creatSearchContainer";
import { creatSearchInput } from "./Components/creatSearchInput";
import { creatH1, CreatHeader } from "./Components/creatheaderAndH1";
import { renderData } from "./RenderData/renderData";
import { searchBtnAddEvenetListener } from "./SearchBtnEventListener/SearchBtnEventListener";
import "./style.scss";


// Skapa en header och sökcontainer dynamiskt
const body = document.body as HTMLElement;
body.appendChild(CreatHeader());
const header = document.querySelector(".header") as HTMLHeadElement;
header.appendChild(creatH1());
header.appendChild(creatSearchContainer());
const searchContainer = document.querySelector(".search-container") as HTMLDivElement;
searchContainer.appendChild(creatSearchInput());
searchContainer.appendChild(createCategorySelect());
searchContainer.appendChild(CreatSearchBtn());

// API 
fetchDataFromAPI; 
body.appendChild(creatResultsContainer());
export const resultsContainer = document.querySelector(".results-container") as HTMLDivElement;
renderData;


//Sökknappen funktion 
export const searhBtn = document.querySelector(".search-btn") as HTMLButtonElement;
searchBtnAddEvenetListener();

