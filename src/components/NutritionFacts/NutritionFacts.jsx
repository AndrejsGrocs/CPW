import { cloneDeepWith } from 'lodash';
import React, { useState, useEffect } from 'react';
import nutritionApi from '../../services/NutritionApi';

export default function NutritionFacts() {
  const [facts, setFacts] = useState(null);

  const getNutritionData = async () => {
    const data = await nutritionApi();
    setFacts(data);
    console.log(data);
  };

  //* we need this useEffect one to load the data - it is called everytime a component renders
  useEffect(() => {
    getNutritionData();
  }, []);

  // console.log(
  //   'hello my round function',
  //   Math.round(facts.totalNutrients.FAT.quantity)
  // );

  return (
    <div>
      {facts === null ? null : (
        <>
          <ul className="nutrition-facts">
            <li>{facts.totalWeight}</li>
            <li>{facts.calories}</li>
            <li>{facts.dietLabels[0]}</li>
            <li>{facts.dietLabels[1]}</li>
            <li>{facts.healthLabels[0]}</li>
            <li>{facts.healthLabels[4]}</li>
            <li>
              {facts.totalNutrients.FAT.label}:
              {facts.totalNutrients.FAT.quantity}
            </li>
            <li>
              {facts.totalNutrients.SUGAR.label}:
              {facts.totalNutrients.SUGAR.quantity}
            </li>
            <li>
              {facts.totalNutrients.PROCNT.label}:
              {facts.totalNutrients.PROCNT.quantity}
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
