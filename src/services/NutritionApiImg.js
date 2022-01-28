import React from 'react';

async function nutritionApiImg(ingr) {
  const axios = require('axios').default;

  const options = {
    method: 'GET',
    url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
    params: { ingr: ingr },
    headers: {
      'x-rapidapi-host': 'edamam-food-and-grocery-database.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_API_KEY,
    },
  };

  console.log('my options from NutritionApiImg', options);

  const response = await axios(options);
  // console.log(response.data.hints[0].food.image);
  return response.data;
}

export default nutritionApiImg;
