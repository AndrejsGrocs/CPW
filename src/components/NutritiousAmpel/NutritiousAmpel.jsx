import React, { useEffect, useState } from 'react';
import picC from '../../assets/images/Nutrition_Ampel/C.png';
import picB from '../../assets/images/Nutrition_Ampel/B.png';
import picA from '../../assets/images/Nutrition_Ampel/A.png';
import NutritionFacts from '../NutritionFacts/NutritionFacts';
import nutritionApi from '../../services/NutritionApi';

export default function NutritiousAmpel({ facts, setFacts }) {
  const nutriAmpFunction = () => {
    console.log(facts);
    if (facts.calories <= 150) {
      return picA;
    }
    if (facts.calories <= 250) {
      return picB;
    }
    if (facts.calories > 250) {
      return picC;
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
