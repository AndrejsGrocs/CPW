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
      // 'x-rapidapi-key': `${process.env.API_KEY}`,
      'x-rapidapi-key': `be3edc6362msh395de5136f1c125p1e9d79jsn0e94ebe79825`,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.calories);

    })
    .catch(function (error) {
      console.error(error);
    });

  return <div></div>;

}

export default nutritionApi;
