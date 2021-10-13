import { baseUrl } from "./settings/api.js";
import { displayMessage } from "./components/displayMessage.js";
import { createArticle } from "./components/createArticle.js";

const articlesUrl = baseUrl + "articles";

export async function makeApiCall() {
  try {
    const response = await fetch(articlesUrl);
    const json = await response.json();

    let articles = json;

    createArticle(articles);
  } catch (error) {
    displayMessage("error", error, ".container");
  }
}
makeApiCall();
