import { createArticleListHtml } from "./components/createArticleHtml.js";
import { getStuffFromApi } from "./components/getStuffFromApi.js";
import { searchArticle } from "./components/searchArticle.js";
import { handleClick } from "./components/onToggle.js";

export const container = document.querySelector(".container");

let allArticles = [];

export async function setup() {
  allArticles = await getStuffFromApi();
  createArticleListHtml(allArticles);
  searchArticle(allArticles);
  const favButtons = document.querySelectorAll("i");
  favButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
}

setup();
