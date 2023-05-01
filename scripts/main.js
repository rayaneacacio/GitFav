import SearchUser from "./search.js";
import favoritesView from "./favorites-view.js";
import reset from "./reset.js";
import changeColor from "./change-color.js";

let favoritesList = [];
favLocal();

document.querySelector('.search button').onclick = () => {
  favLocal();
  SearchUser(favoritesList);
}

document.addEventListener('keydown', function(tecla){
  if(tecla.key == 'Enter'){
    favLocal();
    SearchUser(favoritesList);
  }
})

// verificar se ja existe uma lista de usuários no armazenamento local
function favLocal(){
  const body = document.querySelector('body')

  if(localStorage.favoritesListLocalStorage){
    favoritesList = JSON.parse(localStorage.favoritesListLocalStorage);
    new favoritesView(favoritesList);

    body.style.overflowY = 'hidden';

    if(favoritesList.length==0){
      reset()
    }

  } else{
    reset()
  }
}

// mudar as cores
let colors = 0;
if(localStorage.colors){
  colors = Number(localStorage.colors);
}

changeColor(colors);
document.querySelector('#user span').onclick = () => {
  colors++;
  if(colors>2){
    colors = 0;
  }

  localStorage.colors = colors;
  changeColor(colors);
}
