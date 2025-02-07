
import { SWAPIResponse } from "../Types/types";


 // Funktion för att hämta data
 export const fetchDataFromAPI = async (url: string = "https://swapi.dev/api/"): Promise<SWAPIResponse | null> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("API-svaret var inte OK");
    }
    return await response.json();
  } catch (error) {
    alert(`Fel vid hämtning av data`);
    return null;
  }
};
fetchDataFromAPI();