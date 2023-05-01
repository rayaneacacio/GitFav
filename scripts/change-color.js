// função para mudar as cores da página
export default function changeColor(colors){
  const root = document.querySelector(':root');
  const button = document.querySelector('.search button');
  const star = document.querySelector('tfoot img');

  switch(colors){
    case 0:
      root.style.setProperty('--color-background', '#000000');
      root.style.setProperty('--color-input', '#06181C');
      root.style.setProperty('--color-placeholder', '#7C7C8A');
      root.style.setProperty('--color-button', '#065E7C');
      root.style.setProperty('--color-button-text', '#FFFFFF');
      root.style.setProperty('--color-thead-background', '#092D38');
      root.style.setProperty('--color-thead-text', '#E1E1E6');
      root.style.setProperty('--color-tbody-border-and-scroll', '#4A808C');
      root.style.setProperty('--color-button-tbody', '#F75A68');
      root.style.setProperty('--color-tfoot-background', '#030B0D');
      root.style.setProperty('--color-tfoot-text', '#4E5455');

      button.classList.remove('purple');
      button.classList.remove('cyan');
      button.classList.add('blue');

      star.classList.remove('purple');
      star.classList.remove('cyan');
      break
    case 1:
      root.style.setProperty('--color-background', '#8f6277');
      root.style.setProperty('--color-input', '#cd9cb2');
      root.style.setProperty('--color-placeholder', '#ffffff');
      root.style.setProperty('--color-button', '#fed2e5');
      root.style.setProperty('--color-button-text', '#905972');
      root.style.setProperty('--color-thead-background', '#ad7e94');
      root.style.setProperty('--color-thead-text', '#ffcdf8');
      root.style.setProperty('--color-tbody-border-and-scroll', '#fff2f8');
      root.style.setProperty('--color-button-tbody', '#F75A68');
      root.style.setProperty('--color-tfoot-background', '#edbad1');
      root.style.setProperty('--color-tfoot-text', '#a97394');
      
      button.classList.remove('blue');
      button.classList.remove('cyan');
      button.classList.add('purple');
      
      star.classList.remove('cyan');
      star.classList.add('purple');
      break

    case 2:
      root.style.setProperty('--color-background', '#a7c8d9');
      root.style.setProperty('--color-input', '#8db2db');
      root.style.setProperty('--color-placeholder', '#000000');
      root.style.setProperty('--color-button', '#8cb1ff');
      root.style.setProperty('--color-button-text', '#fffbfb');
      root.style.setProperty('--color-thead-background', '#edf5ff');
      root.style.setProperty('--color-thead-text', '#9b9b9b');
      root.style.setProperty('--color-tbody-border-and-scroll', '#fff2f8');
      root.style.setProperty('--color-button-tbody', '#ffffff');
      root.style.setProperty('--color-tfoot-background', '#aec5dc');
      root.style.setProperty('--color-tfoot-text', '#718a9a');
      
      button.classList.remove('blue');
      button.classList.remove('purple');
      button.classList.add('cyan');
      
      star.classList.remove('purple');
      star.classList.add('cyan');
      break
  }
}