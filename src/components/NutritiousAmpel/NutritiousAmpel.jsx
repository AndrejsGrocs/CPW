import React, { useEffect, useState } from 'react';
import picC from '../../assets/images/Nutrition_Ampel/C.png';
import picB from '../../assets/images/Nutrition_Ampel/B.png';
import picA from '../../assets/images/Nutrition_Ampel/A.png';
import NutritionFacts from '../NutritionFacts/NutritionFacts';
import nutritionApi from '../../services/NutritionApi';

export default function NutritiousAmpel({ facts, setFacts }) {
  const nutriAmpFunction = () => {
    console.log(facts);
    if (facts.calories < 300) {
      return picA;
    }
    // if (facts.calories > 114) {
    //   return picB;
    // }
  };

  // useEffect(() => {
  //   nutriAmpFunction();
  // }, []);

  return (
    <div id="ampel">
      <img src={nutriAmpFunction()} alt="" />
    </div>
  );
}
