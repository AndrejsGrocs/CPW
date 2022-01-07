import React from 'react';
import picA from '../../assets/images/Nutrition_Ampel/A.png';
import picB from '../../assets/images/Nutrition_Ampel/B.png';
import NutritionApi from '../../services/NutritionApi';
import NutritionFacts from '../NutritionFacts/NutritionFacts';
import NutritiousAmpel from '../NutritiousAmpel/NutritiousAmpel';

export default function Card({ imageData, facts, setFacts, setImage }) {
  return (
    <div>
      <figure className="image-block">
        <h3>Your Product is "Apple"</h3>
        {/* <img
          className="card-image"
          src="https://www.frischeparadies-shop.de/media/image/0d/5c/66/OS_20122_1_Ananas.jpg"
        /> */}
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

          <br />
          <button>More info ...</button>
          <NutritionFacts facts={facts} setFacts={setFacts} />
        </figcaption>
      </figure>
    </div>
  );
}
