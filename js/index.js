import { createArticleListHtml } from "./components/createArticleHtml.js";
import { getStuffFromApi } from "./components/getStuffFromApi.js";
import { setDeleteListener } from "./components/onDelete.js";

export const container = document.querySelector(".container");

let allArticles = [];

export async function setup() {
  allArticles = await getStuffFromApi();
  createArticleListHtml(allArticles);
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => setDeleteListener(button, allArticles));
}

setup();
