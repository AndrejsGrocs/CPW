import React, { useState, useEffect } from 'react';
import NutritiousAmpel from '../NutritiousAmpel/NutritiousAmpel';

export default function NutritionFacts({ facts, setFacts }) {
  return (
    <div id='nFacts'>
      {!facts ? null : (
        <>
          <ul className="nutrition-facts">
            <li>Total Weight: <b>{facts.totalWeight} g</b></li>
            <hr />
            <li>Calories: <b>{facts.calories} cal</b></li>
            <hr />
            <li>{facts.dietLabels[0]}</li>
            <hr />
            <li>{facts.dietLabels[1]}</li>
            <hr />
            <li>{facts.healthLabels[0]}</li>
            <hr />
            <li>{facts.healthLabels[4]}</li>
            <hr />
            <li>
              <h3 className='inlineCategory'>
              <span>
              Fat: </span>    
              <span><b>
                 {facts.totalNutrients.FAT.quantity.toFixed(2)}
                {facts.totalNutrients.FAT.unit} 
              </b>  
              </span>
              </h3>
            </li>
            <hr />
            <li>
            <h3 className='inlineCategory'>
              <span>Sugar: </span>
              <span>
                <b>{facts.totalNutrients.SUGAR.quantity.toFixed(2)}
                &nbsp;    
                   {facts.totalNutrients.SUGAR.unit}</b>
              </span>
            </h3>
            </li>
            <hr />
            <li>
            <h3 className='inlineCategory'> 
            <span>Proteine: </span>
              <span>              
              <b>{facts.totalNutrients.PROCNT.quantity.toFixed(2)}
              &nbsp;
              {facts.totalNutrients.FAT.unit}</b>
              </span>
            </h3>  
            </li>
          </ul>
          <NutritiousAmpel facts={facts} setFact={setFacts} />
        </>
      )}
    </div>
  );
}
