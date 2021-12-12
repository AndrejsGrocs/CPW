import React from 'react';
import axios from 'axios';
import env from 'react-dotenv';

function nutritionApi() {
  const options = {
    method: 'GET',
    url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
    params: { ingr: 'apple' },
    headers: {
      'x-rapidapi-host': 'edamam-food-and-grocery-database.p.rapidapi.com',
      'x-rapidapi-key': `${window.env.API_KEY}`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div>
      <h1></h1>
    </div>
  );
}

export default nutritionApi;
