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
        <div className="col subP">
          <h3 className="fs-1 mt-4 mb-4">
            <span className="titleProd p-2 m-2">
              Your food is:{' '}
              <span className="variable-text">{productTitle}</span>
            </span>
          </h3>
          <img
            style={{
              borderColor: facts
                ? facts.calories <= 150
                  ? '#678561'
                  : facts.calories <= 250
                  ? '#B4B579'
                  : facts.calories <= 350
                  ? '#EAC846'
                  : facts.calories >= 400
                  ? '#E09874'
                  : facts.calories >= 500
                  ? '#C6654E'
                  : '#DFE8D6'
                : '',
            }}
            alt="error img"
            className="card-image m-5 foodPic"
            src={
              imageFromEdamam === null
                ? 'https://www.frischeparadies-shop.de/media/image/0d/5c/66/OS_20122_1_Ananas.jpg'
                : imageFromEdamam.hints[0] === undefined
                ? 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80'
                : imageFromEdamam.hints[0].food.image
            }
          />
        </div>
        <div className="col listA">
          <h3 className="fs-2">
            <span className="variable-text">{productTitle}</span> health rating
            is:
          </h3>
          <figcaption>
            <NutritionFacts facts={facts} setFacts={setFacts} />
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
