import favoritesView from "./favorites-view.js";
import addLocalStorage from "./add-local-storage.js";

// classe para a logica dos dados 
export default class favorites{
  constructor(username, favoritesList){
    fetch(`https://api.github.com/users/${username}`)
    .then(data => {
      if(data.ok){
        return data.json();
      } else{
        throw Error(data.statusText);
      }
    }).then(response => {
      this.createFavorite(response, favoritesList);
    }).catch(error => {
      alert('usuário não encontrado!');
      console.error(error);
    })
  }

  createFavorite(data, favoritesList){
    const user = {
      image: data.avatar_url,
      name: data.name,
      login: data.login,
      repositories: data.public_repos,
      followers: data.followers
    }

    this.createFavoritesList(user, favoritesList);
  }

  createFavoritesList(user, favoritesList){
    for(let n=0; n<favoritesList.length; n++){
      if(favoritesList[n].login==user.login){
        alert('usuário já cadastrado :p');
        return;
      }
    }
    
    favoritesList.unshift(user);
    addLocalStorage(favoritesList);
    new favoritesView(favoritesList);
  }
}