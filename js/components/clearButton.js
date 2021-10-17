import { displayMessage } from "./displayMessage.js";

export function clearButton() {
  const clearBtn = document.querySelector(".clearBtn");

  clearBtn.addEventListener("click", clearArticles);

  function clearArticles() {
    if (confirm("Are you sure?")) {
      localStorage.clear();
      const container = document.querySelector(".container");
      container.innerHTML = [];
      clearBtn.classList.add("d-none");
      displayMessage(
        "warning",
        "There is no articles saved in favourites",
        ".container"
      );
    }
  }
}
