import { getExistingFavs, saveFavs } from "../utils/favFunctions.js";

export function handleClick() {
  this.classList.toggle("fa");
  this.classList.toggle("far");

  const id = this.dataset.id;
  const title = this.dataset.title;
  const author = this.dataset.author;
  const summary = this.dataset.summary;

  const currentFavs = getExistingFavs();

  const articleExist = currentFavs.find((fav) => fav.id === id);

  if (articleExist === undefined) {
    const article = { id: id, title: title, author: author, summary: summary };
    currentFavs.push(article);
    saveFavs(currentFavs);
  } else {
    const newFavs = currentFavs.filter((fav) => fav.id !== id);
    saveFavs(newFavs);
  }
}
