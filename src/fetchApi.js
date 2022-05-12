const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/llFawVoYD7zLAfvY9jQn/scores/';

const postApi = (score) => {
  const scoreResult = fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(score),
  });
  return scoreResult.json;
};

export default postApi;