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

//   console.log('my options from NutritionApi', options);

//   const response = await axios.request(options);
//   console.log(response);
//   return response.data;

//   //* We want to use this in the nutrotius-facts component
// }

var options = {
  method: 'GET',
  url: 'https://appetitoso-best-food-dishes-v1.p.rapidapi.com/dish/search',
  params: {
    query: 'Bistecca',
    lng: '11.2409679',
    lat: '43.7799582',
    apikey: 'undefined',
    lang: 'it'
  },
  headers: {
    'x-rapidapi-host': 'appetitoso-best-food-dishes-v1.p.rapidapi.com',
    'x-rapidapi-key': 'be3edc6362msh395de5136f1c125p1e9d79jsn0e94ebe79825'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export default nutritionApi;
