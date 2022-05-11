import './styles/main.css';

const scoreContainer = document.querySelector('.score-container');
const submitScore = document.querySelector('.submit-score');
const inputNameField = document.querySelector('.input-name');
const inputScoreField = document.querySelector('.input-score');

submitScore.addEventListener('click', () => {
  const inputFields = {
    name: inputNameField.value,
    score: inputScoreField.value,
  };
  const template = document.createElement('template');
  template.innerHTML = `<p><span>${inputFields.name}: </span> ${inputFields.score}</p>`;
  scoreContainer.appendChild(template.content);
  inputNameField.value = '';
  inputScoreField.value = '';
});