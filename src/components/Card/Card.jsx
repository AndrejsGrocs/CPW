import React from 'react';

import NutritionFacts from '../NutritionFacts/NutritionFacts';

export default function Card({ facts, setFacts, imageFromEdamam }) {
  return (
    <div className="container mainCard">
      <figure className="image-block row p-5 m-3">
        <img
          className="card-image col"
          src={
            imageFromEdamam
              ? imageFromEdamam.hints[1].food.image
              : 'https://www.frischeparadies-shop.de/media/image/0d/5c/66/OS_20122_1_Ananas.jpg'
          }
        />
        <div className="col">
          <h3 className="fs-1">
            Your Product is: <span className="variable-text">Pineapple</span>
          </h3>
          <h3 className="fs-2">Health rating is:</h3>
          <figcaption>
            <NutritionFacts facts={facts} setFacts={setFacts} />
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
