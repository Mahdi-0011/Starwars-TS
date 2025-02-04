/** @format */

// Typa upp
export interface SWAPIResult {
  name?: string;
  title?: string;
  model?: string;
  height?: string;
  mass?: string;
  gender?: string;
  birth_year?: string;
  climate?: string;
  terrain?: string;
  population?: string;
  director?: string;
  producer?: string;
  release_date?: string;
  manufacturer?: string;
  length?: string;
  starship_class?: string;
  cost_in_credits?: string;
  classification?: string;
  average_height?: string;
  average_lifespan?: string;
  species_name?: string;
}

  export interface SWAPIResponse {
  results: SWAPIResult[];
}
