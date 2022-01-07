import React from 'react';
require('dotenv').config();

async function nutritionApi(ingr) {
  const axios = require('axios').default;

  const options = {
    method: 'GET',
    url: 'https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data',
    params: { ingr: ingr },
    headers: {
      'x-rapidapi-host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com',
      'x-rapidapi-key': 'be3edc6362msh395de5136f1c125p1e9d79jsn0e94ebe79825',
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
