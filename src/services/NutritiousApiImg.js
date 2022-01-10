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
      'x-rapidapi-key': 'be3edc6362msh395de5136f1c125p1e9d79jsn0e94ebe79825',
    },
  };

  console.log('my options from NutritionApiImg', options);

  const response = await axios(options);
  console.log(response);
  return response.data;
}

export default nutritionApiImg;
