import React, { useState } from 'react';
import { render } from 'sass';

import picA from '../../assets/images/Nutrition_Ampel/A.png';
import picB from '../../assets/images/Nutrition_Ampel/B.png';
import NutritionFacts from '../NutritionFacts/NutritionFacts';

export default function Card() {
  console.log('Call component');
  const [show, setShow] = useState(false);
  return (
    <div>
      <figure className="image-block">
        <h3>Your Product is Pineapple</h3>
        <img
          className="card-image"
          src="https://www.frischeparadies-shop.de/media/image/0d/5c/66/OS_20122_1_Ananas.jpg"
        />
        <figcaption>
          <h3>Pineapples health rating is:</h3>
          <img className="rating-image" src={picB} />
          
          <br />
          <button onClick={() => setShow(!show)}>See More Data</button>
          {show ? <NutritionFacts /> : null}
        </figcaption>
      </figure>
    </div>
  );
}
