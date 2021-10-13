export function createArticle(articles) {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  articles.forEach(function (item) {
    container.innerHTML += `<div class="item-container">
        <h4>${item.title}</h4>
        <p><span>Author: </span>${item.author}</p>
        <p>${item.summary}</p>
        <button data-item="${item.title}">Toggle</button>
        </div>`;
  });
  const items = document.querySelectorAll("button");

  items.forEach(function (button) {
    button.addEventListener("click", toggleItem);
  });
  console.log(items);

  function toggleItem(event) {
    const deleteThisArticle = event.target.dataset.item;

    const toggleArticle = articles.filter(function (item) {
      if (deleteThisArticle !== item.title) {
        return true;
      }
    });

    articles = toggleArticle;

    createArticle(articles);

    console.log(articles);
  }
}
