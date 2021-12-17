import React from 'react';
import pic from '../../assets/images/Nutrition_Ampel/B.png';
import NutritionApi from '../../services/NutritionApi';
import NutritionFacts from '../NutritionFacts/NutrtionFacts';

export default function Card({ imageData }) {
  return (
    <div>
      <figure className="image-block">
        <h3>Your Product is Pineapple</h3>
        <img
          className="card-image"
          src="https://www.frischeparadies-shop.de/media/image/0d/5c/66/OS_20122_1_Ananas.jpg"
        />
        <img
          className="card-image"
          src={
            imageData
              ? imageData.urls.full
              : 'https://www.frischeparadies-shop.de/media/image/0d/5c/66/OS_20122_1_Ananas.jpg'
          }
        />

        <figcaption>
          <h3>Pineapples health rating is:</h3>
          <img className="rating-image" src={pic} />

          <br />
          <button>More info ...</button>
          <NutritionFacts />
        </figcaption>
      </figure>
    </div>
  );
}
