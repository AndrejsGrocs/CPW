import React from 'react';
require('dotenv').config();

async function nutritionApi(ingr) {
  const axios = require('axios').default;

  const options = {
    method: 'GET',
    url: 'https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data',
    params: { ingr: '1 ' + ingr },
    headers: {
      'x-rapidapi-host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com',
      'x-rapidapi-key': '03de24f8eamsh7be555001c91a79p136cc2jsn5f884774cf23',
    },
  };

  console.log('my options from NutritionApi', options);

  const response = await axios.request(options);
  console.log(response);
  return response.data;

  //* We want to use this in the nutrotius-facts component
  // return (
  //   <div>
  //     <p>{options.calories}</p>
  //   </div>
  // );
}

export default nutritionApi;
