import { createArticleListHtml } from "./createArticleHtml.js";
import { displayMessage } from "./displayMessage.js";

export function searchArticle(articles) {
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredArticles = articles.filter(function (article) {
      if (article.title.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });
    createArticleListHtml(filteredArticles);

    console.log(filteredArticles);

    if (filteredArticles.length === 0) {
      return displayMessage(
        "error",
        "No articles matched you're search result",
        ".container"
      );
    }
  };
}
