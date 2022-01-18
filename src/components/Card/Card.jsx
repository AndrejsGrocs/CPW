import React from 'react';
import NutritionFacts from '../NutritionFacts/NutritionFacts';


export default function Card({
  facts,
  setFacts,
  imageFromEdamam,
  productTitle,
}) {
  return (

    <div className="container mainCard rounded scale-in-hor-center">
      <figure className="image-block row p-5 m-3">
      <div className='col subP'>          
      <h3 className="fs-1 mt-4 mb-4">
      <span className='titleProd p-2 m-2'>
            Your food is: <span className="variable-text">{productTitle}</span>
      </span>
      </h3>
        <img 
        style={{borderColor: facts ? facts.calories <= 150 ? '#678561' : facts.calories <= 250 ? '#B4B579' : facts.calories <= 350 ?  '#EAC846' : facts.calories <= 400 ? '#E09874' : facts.calories <= 500 ? '#C6654E' : 'grey' : ''}} 
        alt='supposed to be a food image'
          className="card-image m-5 foodPic"
          src={
            imageFromEdamam
              ? imageFromEdamam.hints[0].food.image
              : 'https://www.frischeparadies-shop.de/media/image/0d/5c/66/OS_20122_1_Ananas.jpg'
          }
        />
        </div>
        <div className="col listA">

          <h3 className="fs-2">
          <span className="variable-text">{productTitle}</span> health rating is:</h3>
          <figcaption>
            <NutritionFacts facts={facts} setFacts={setFacts} />
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
