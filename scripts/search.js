import favorites from "./favorites.js";

// função para buscar usuario
export default function SearchUser(favoritesList){
  const username = document.querySelector('.search input').value;
  new favorites(username, favoritesList);

  document.querySelector('.search input').value = '';
}