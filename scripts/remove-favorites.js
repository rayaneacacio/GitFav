import favoritesView from "./favorites-view.js";
import addLocalStorage from "./add-local-storage.js";
import tbodyHeight from "./tbody-height.js";

let newFavList = [];

function createButtonsRemove(){
  const removeButtons = document.getElementsByClassName('removeFavorite');

  for(let n=0; n<removeButtons.length; n++){
    removeButtons[n].onclick = () => {
      removeFavorite(JSON.parse(localStorage.favoritesListLocalStorage)[n]);
    }
  }
}

// remover usuarios
function removeFavorite(fav){
  newFavList = JSON.parse(localStorage.favoritesListLocalStorage)
  .filter(item => item.login != fav.login);

  addLocalStorage(newFavList);
  new favoritesView(newFavList);

  tbodyHeight(newFavList.length);
}

export{
  createButtonsRemove
}