import React from 'react';
require('dotenv').config();

async function nutritionApiImg(ingr) {
  const axios = require('axios').default;

  const options = {
    method: 'GET',
    url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
    params: { ingr: ingr },
    headers: {
      'x-rapidapi-host': 'edamam-food-and-grocery-database.p.rapidapi.com',
      'x-rapidapi-key': '03de24f8eamsh7be555001c91a79p136cc2jsn5f884774cf23',
    },
  };

  console.log('my options from NutritionApiImg', options);

  const response = await axios(options);
  // console.log(response.data.hints[0].food.image);
  return response.data;
}

export default nutritionApiImg;
