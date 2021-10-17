import { getExistingFavs } from "./utils/favFunctions.js";
import { displayMessage } from "./components/displayMessage.js";
import { clearButton } from "./components/clearButton.js";

const container = document.querySelector(".container");
const clearBtn = document.querySelector(".clearBtn");
const favourites = getExistingFavs();

clearButton();

if (favourites.length === 0) {
  displayMessage(
    "warning",
    "There is no articles saved in favourites",
    ".container"
  );
  clearBtn.classList.add("d-none");
}

favourites.forEach((favourite) => {
  container.innerHTML += `<div class="item-container">
                            <h4>${favourite.title}</h4>
                               <p><span>Author: </span>${favourite.author}</p>
                                  <p>${favourite.summary}</p>
                                     </div>`;
});
