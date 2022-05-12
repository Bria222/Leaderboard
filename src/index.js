import './styles/main.css';
import postApi from './fetchApi.js';

const scoreContainer = document.querySelector('.score-container');
const submitScore = document.querySelector('.submit-score');
const inputNameField = document.querySelector('.input-name');
const inputScoreField = document.querySelector('.input-score');
const refreshButton = document.querySelector('.refresh-score');

submitScore.addEventListener('click', async () => {
  const inputFields = {
    user: inputNameField.value,
    score: inputScoreField.value,
  };
  const template = document.createElement('template');
  template.innerHTML = `<p><span>${inputFields.user}: </span> ${inputFields.score}</p>`;
  scoreContainer.appendChild(template.content);
  await postApi(inputFields);
  inputNameField.value = '';
  inputScoreField.value = '';
});

refreshButton.addEventListener('click', () => {
  scoreContainer.innerHTML = '';
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/llFawVoYD7zLAfvY9jQn/scores/')
    .then((res) => res.json())
    .then((data) => {
      data.result.forEach((post) => {
        const template = document.createElement('template');
        template.innerHTML += `<p><span>${post.user}: </span> ${post.score}</p>`;
        scoreContainer.appendChild(template.content);
      });
    });
});