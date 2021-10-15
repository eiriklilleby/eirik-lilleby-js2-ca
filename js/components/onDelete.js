import { createArticleListHtml } from "./createArticleHtml.js";

export function setDeleteListener(element, articles) {
  function onDelete(event) {
    const idToDelete = event.target.dataset.id;
    const filteretedArticles = articles.filter((article) => {
      if (parseInt(idToDelete) !== article.id) {
        console.log(article.id, idToDelete);
        return true;
      }
    });

    console.log(filteretedArticles);
    articles = idToDelete;
    console.log(idToDelete, articles);
    createArticleListHtml(filteretedArticles);
  }
  element.addEventListener("click", onDelete);
}
