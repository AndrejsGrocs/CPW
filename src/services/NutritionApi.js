import React from 'react';

async function nutritionApi(ingr) {
  const axios = require('axios').default;

  const options = {
    method: 'GET',
    url: 'https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data',
    params: { ingr: '1 ' + ingr },
    headers: {
      'x-rapidapi-host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_API_KEY,
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
