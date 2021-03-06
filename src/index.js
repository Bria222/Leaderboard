import './styles/main.css';
import Score from './fetchApi.js';

const newScore = new Score();
const addNewScore = document.querySelector('.add-new-score');
addNewScore.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = addNewScore.name.value;
  const scoreNum = addNewScore.score.value;
  newScore.addScore({ user, scoreNum });
  addNewScore.name.value = '';
  addNewScore.score.value = '';
});

const refreshButton = document.querySelector('.refresh-button');
refreshButton.addEventListener('click', newScore.fetchScore);
window.addEventListener('load', newScore.getScore);