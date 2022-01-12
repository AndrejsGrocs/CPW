import React from 'react';

import NutritionFacts from '../NutritionFacts/NutritionFacts';

export default function Card({ facts, setFacts, imageFromEdamam }) {
  return (
    <div>
      <figure className="image-block">
        <h3>
          Your Product is <span></span>
        </h3>

        <img
          className="card-image"
          src={
            imageFromEdamam
              ? imageFromEdamam.hints[1].food.image
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
