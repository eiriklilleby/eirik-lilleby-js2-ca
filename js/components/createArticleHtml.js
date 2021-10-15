import { container } from "../index.js";

export function createArticleHtml(article) {
  return `<div class="item-container">
        <h4>${article.title}</h4>
        <p><span>Author: </span>${article.author}</p>
        <p>${article.summary}</p>
        <button data-id="${article.id}">Toggle</button>
        </div>`;
}

export function createArticleListHtml(articleList) {
  let html = "";
  articleList.forEach(function (articleList) {
    let article = articleList;
    html += createArticleHtml(article);
  });
  container.innerHTML = html;
}
