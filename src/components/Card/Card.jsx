import React from 'react';
import picA from '../../assets/images/Nutrition_Ampel/A.png';
import picB from '../../assets/images/Nutrition_Ampel/B.png';
import NutritionApi from '../../services/NutritionApi';
import NutritionFacts from '../NutritionFacts/NutritionFacts';
import NutritiousAmpel from '../NutritiousAmpel/NutritiousAmpel';

export default function Card({ imageData, facts, setFacts }) {
  return (
    <div className='container mainCard'>    
      <figure className="image-block row p-5 m-3">
      <img
          className="card-image col"
          src={
            imageData
              ? imageData.urls.full
              : 'https://www.frischeparadies-shop.de/media/image/0d/5c/66/OS_20122_1_Ananas.jpg'
          }
        />
      <div className='col'>
         <h3 className='fs-1'>Your Product is: <span className='variable-text'>Pineapple</span></h3> 
         <h3 className='fs-2'>Health rating is:</h3>
          <figcaption>
          <NutritionFacts facts={facts} setFacts={setFacts} />
        </figcaption>
    </div>     
      </figure>
    </div>
  );
}
