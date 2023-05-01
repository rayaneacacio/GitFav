import {createButtonsRemove} from "./remove-favorites.js";
import tbodyHeight from "./tbody-height.js";

// classe para a visualizção 
export default class favoritesView{
  constructor(userData){
    const tbody = document.querySelector('tbody');
    const tfoot = document.querySelector('tfoot');
    tbody.style.overflow = 'hidden';
    tbody.innerHTML = '';

    userData.forEach(newfavorite => this.createTrTBody(newfavorite, tbody, tfoot));
    createButtonsRemove();

    tbodyHeight(userData.length);
  }

  createTrTBody(user, tbody, tfoot){
    tbody.style.display = 'block';
    tfoot.style.display = "none";
    
    const tr = document.createElement('tr');
    tr.classList.add('rowtbody');
    tr.innerHTML = `
      <th>
        <img src="${user.image}" alt="imagem de ${user.name}"></img>
        <div>
          <h1>${user.name}</h1>
          <a href="https://github.com/${user.login}" target="_blank">/${user.login}</a>
        </div>
      </th>
      <th>
        ${user.repositories}
      </th>
      <th>
        ${user.followers}
      </th>
      <th class="action">
        <button class="removeFavorite">Remover</button>
      </th>
    `;

    tbody.appendChild(tr);
  }
}