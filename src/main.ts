/** @format */

import { fetchDataFromAPI } from "./API/fetchDataFromApi";
import { createCategorySelect } from "./Components/categorySelect";
import { creatResultsContainer } from "./Components/creatResultContainer";

import { CreatSearchBtn } from "./Components/creatSearchBtn";
import { creatSearchContainer } from "./Components/creatSearchContainer";
import { creatSearchInput } from "./Components/creatSearchInput";
import { creatH1, CreatHeader } from "./Components/creatheaderAndH1";
import { renderData } from "./RenderData/renderData";
import { searchBtnAddEventListener } from "./SearchBtnEventListener/SearchBtnEventListener";
import "./style.scss";


// Skapa en header och sökcontainer
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
await fetchDataFromAPI(); 
body.appendChild(creatResultsContainer());
export const resultsContainer = document.querySelector(".results-container") as HTMLDivElement;
renderData();


//Sökknappen funktion 
export const searchBtn = document.querySelector(".search-btn") as HTMLButtonElement;
searchBtnAddEventListener();

