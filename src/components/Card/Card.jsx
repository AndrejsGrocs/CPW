import React from 'react';
import picA from '../../assets/images/Nutrition_Ampel/A.png';
import picB from '../../assets/images/Nutrition_Ampel/B.png';
import nutritionApiImg from '../../services/NutritiousApiImg';
import NutritionFacts from '../NutritionFacts/NutritionFacts';
import NutritiousAmpel from '../NutritiousAmpel/NutritiousAmpel';

export default function Card({
  facts,
  setFacts,
  imageFromEdamam,
  setImageFromEdamam,
}) {
  const getImgFromEdamam = async () => {
    const data = await nutritionApiImg();
    setImageFromEdamam(data);
    console.log('this is from getImgFromEdamam', data);
  };

  return (
    <div>
      <figure className="image-block">
        <h3>Your Product is</h3>
        {/* <img
          className="card-image"
          src="https://www.frischeparadies-shop.de/media/image/0d/5c/66/OS_20122_1_Ananas.jpg"
        /> */}
        <img
          className="card-image"
          src={
            imageFromEdamam
              ? imageFromEdamam.image
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
