import React, { useState, useEffect } from 'react';
import NutritiousAmpel from '../NutritiousAmpel/NutritiousAmpel';

export default function NutritionFacts({ facts, setFacts }) {
  const getNutritionData = async () => {
    const data = await nutritionApi();
    setFacts(data);
    console.log('this is from getNutritionData', data);
  };

  //* we need this useEffect one to load the data - it is called everytime a component renders
  // useEffect(() => {
  //   getNutritionData();
  // }, []);

  return (
    <div id='nFacts'>
      {!facts ? null : (
        <>
          <ul className="nutrition-facts">
            <li>{facts.totalWeight}</li>
            <li>{facts.calories}</li>
            <li>{facts.dietLabels[0]}</li>
            <li>{facts.dietLabels[1]}</li>
            <li>{facts.healthLabels[0]}</li>
            <li>{facts.healthLabels[4]}</li>
            <li>
              <h3>Fat:</h3>
              <p>
{/*                 {facts.totalNutrients.FAT.quantity.toFixed(2)}
                {facts.totalNutrients.FAT.unit} */}
              </p>
            </li>
            <li>
              <h3>Sugar:</h3>
              <p>
                {facts.totalNutrients.SUGAR.quantity.toFixed(2)}
                {facts.totalNutrients.SUGAR.unit}
              </p>
            </li>
            <li>
              <h3>Proteine:</h3>
              {facts.totalNutrients.PROCNT.quantity.toFixed(2)}
              {facts.totalNutrients.FAT.unit}
            </li>
          </ul>
          <NutritiousAmpel facts={facts} setFact={setFacts} />
        </>
      )}
    </div>
  );
}
