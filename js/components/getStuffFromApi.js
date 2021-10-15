import { displayMessage } from "./displayMessage.js";
import { baseUrl } from "../settings/api.js";

const articlesUrl = baseUrl + "articles";

export async function getStuffFromApi() {
  try {
    const response = await fetch(articlesUrl);
    return await response.json();
  } catch (error) {
    displayMessage("error", error, ".container");
  }
}
