import { container } from "../index.js";
import { getExistingFavs } from "../utils/favFunctions.js";

const favourites = getExistingFavs();

export function createArticleHtml(article) {
  let cssClass = "far";

  const doesObjectExist = favourites.find(
    (fav) => parseInt(fav.id) === article.id
  );

  if (doesObjectExist) {
    cssClass = "fa";
  }

  return `<div class="item-container">
            <h4>${article.title}</h4>
                <p><span>Author: </span>${article.author}</p>
                  <p>${article.summary}</p>
                    <i class="${cssClass} fa-heart" data-id="${article.id}" data-title="${article.title}" data-author="${article.author}" data-summary="${article.summary}"></i>
                      </div>`;
}

export function createArticleListHtml(articleList) {
  let html = "";
  articleList.forEach((articleList) => {
    let article = articleList;
    html += createArticleHtml(article);
  });
  container.innerHTML = html;
}
