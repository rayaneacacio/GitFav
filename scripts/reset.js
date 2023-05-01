export default function reset(){
  document.querySelector('body').style.overflowY = 'scroll';
  document.querySelector('tbody').style.display = 'none';
  document.querySelector('tfoot').style.display = 'flex';
}