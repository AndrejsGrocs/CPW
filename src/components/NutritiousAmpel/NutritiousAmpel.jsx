import React, { useEffect, useState } from 'react';
import picC from '../../assets/images/Nutrition_Ampel/C.png';
import picB from '../../assets/images/Nutrition_Ampel/B.png';
import picA from '../../assets/images/Nutrition_Ampel/A.png';
import NutritionFacts from '../NutritionFacts/NutritionFacts';
import nutritionApi from '../../services/NutritionApi';

export default function NutritiousAmpel({ facts, setFacts }) {
  const nutriAmpFunction = async () => {
    const data = await nutritionApi();
    setFacts(data);
    console.log('my data from Ampel', data);

    if (1 < 2) {
      return picA;
    }
  };

  // useEffect(() => {
  //   nutriAmpFunction();
  // }, []);

  return (
    <div>
      <img style={{ width: '250px' }} src={nutriAmpFunction()} alt="" />
    </div>
  );
}
