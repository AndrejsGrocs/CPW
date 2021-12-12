import React from 'react';
require('dotenv').config();

function nutritionApi() {
  const axios = require('axios').default;

  const options = {
    method: 'GET',
    url: 'https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data',
    params: { ingr: '1 large apple' },
    headers: {
      'x-rapidapi-host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com',
      'x-rapidapi-key': `${process.env.API_KEY}`,
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

  return <div></div>;
}

export default nutritionApi;
