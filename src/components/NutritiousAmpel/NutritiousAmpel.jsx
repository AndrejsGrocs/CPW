import picC from '../../assets/images/Nutrition_Ampel/C.png';
import picB from '../../assets/images/Nutrition_Ampel/B.png';
import picA from '../../assets/images/Nutrition_Ampel/A.png';
import picD from '../../assets/images/Nutrition_Ampel/D.png';
import picE from '../../assets/images/Nutrition_Ampel/E.png';
import { useState } from 'react';

export default function NutritiousAmpel({ facts }) {
   const nutriAmpFunction = () => {
    if (facts.calories <= 150) {

      return picA;
    } 
    if (facts.calories <= 250) {

      return picB;
    }
    if (facts.calories <= 350) {

      return picC;
    }
    if (facts.calories >= 400) {

      return picD;
    }
    if (facts.calories >= 500 || facts.totalNutrients.SUGAR.unit > 25) {

      return picE;
    } 
  }; 
  return (

    <div id="ampel"
     className='p-2' 
     style={{backgroundColor: facts.calories <= 150 ? '#678561' : facts.calories <= 250 ? '#B4B579' : facts.calories <= 350 ?  '#EAC846' : facts.calories <= 400 ? '#E09874' : facts.calories <= 500 ? '#C6654E' : 'grey'}}>
      <img 
      src={nutriAmpFunction()} 
      alt="nutritional-traffic-light" />
    </div>
  );
}