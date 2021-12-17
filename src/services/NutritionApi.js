import React from 'react';
require('dotenv').config();

async function nutritionApi() {
  const axios = require('axios').default;

  const options = {
    method: 'GET',
    url: 'https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data',
    params: { ingr: '1 large apple' },
    headers: {
      'x-rapidapi-host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com',
      'x-rapidapi-key': '7a62647930msh79885bfe25a16e7p11a920jsnd823b45480ce',
    },
  };

  console.log(options);

  const response = await axios.request(options);
  return response.data;

  //* We want to use this in the nutrotius-facts component
  // return (
  //   <div>
  //     <p>{options.calories}</p>
  //   </div>
  // );
}

export default nutritionApi;
