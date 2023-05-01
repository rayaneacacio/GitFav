import reset from "./reset.js";

// função para ajustar a altura da tabela de acordo com o tamanho da viewport (tabela responsiva)
export default function tbodyHeight(numberOfRows){
  const tbody = document.querySelector('tbody');

  if(numberOfRows==0){
    reset()
  } else{ 
    tbody.style.overflow = 'hidden';
    const lastTh = document.querySelector('.action');
    lastTh.style.width = '20.8rem';

    const table = document.querySelector('table')
    if(table.clientWidth/10>95){
      css(numberOfRows, tbody, lastTh);
    } else{
      if(table.clientWidth/10<=95){
        css(numberOfRows, tbody, lastTh);

        if(document.documentElement.clientHeight/10<=80 && numberOfRows>=4){
          tbody.style.height = '31.5rem';
          tbody.style.overflowY = 'scroll';
        } else if(numberOfRows>=4){
          switch(numberOfRows){
            case 4:
              tbody.style.height = '42rem';
              break
            case 5:
              tbody.style.height = '52.5rem';
              break
            default:
              tbody.style.height = '62.4rem';
              tbody.style.overflowY = 'scroll';
              break
          }
        }
      }
    }
  }
}

function css(numberOfRows, tbody, lastTh){
  switch(numberOfRows){
    case 1:
      tbody.style.height = '17rem';
      break
    case 2:
      tbody.style.height = '27.5rem';
      break
    case 3:
      tbody.style.height = '38rem';
      break
    default:
      lastTh.style.width = '18.8rem';
      tbody.style.overflowY = 'scroll';
      break
    }
}