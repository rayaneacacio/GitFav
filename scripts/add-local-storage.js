// adicionar a lista de usuarios no armazenamento local
export default function addLocalStorage(favList){
  localStorage.favoritesListLocalStorage = JSON.stringify(favList);
}