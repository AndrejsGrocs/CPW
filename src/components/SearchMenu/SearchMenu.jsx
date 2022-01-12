import { useState, useEffect } from 'react';
import { getUnsplashData } from '../../services/apiServices';
import nutritionApi from '../../services/NutritionApi';

export default function SearchMenu({
  image,
  setImage,
  setImageData,
  setFacts,
}) {
  const getImageData = async (image) => {
    try {
      const data = await getUnsplashData(image);
      console.log('Data from my getImageDate-Function', data);
      setImageData(data);
    } catch (error) {
      console.log("Can't get no Data from unplsplash-API", error.message);
    }
  };

  //*********************************************** */
  const onChangeImage = (e) => {
    console.log('e.target.value console-log', e.target.value);
    return setImage(e.target.value);
  };

  //*********************************************** */
  const onClickButton = async (e) => {
    setImage();
    getImageData(image);
    const result = await nutritionApi(image);
    setFacts(result);
  };

  //*********************************************** */

  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log(image);
  };

  return (
  
      <form onSubmit={onSubmitHandle} className='container form-container mb-5 mt-5'>
      <div className="input-group input-group-lg d-flex justify-content-center align-items-center flex-column subcontainer">
      <input id="search" type="text" className="form-control input w-100 shadow-lg p-3 mb-5 bg-body rounded" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Enter your food here" onChange={onChangeImage}/>
      <button id='submitButton' type='submit' className='btn-lg btn' onClick={onClickButton} >search</button>        
      </div>
      </form>
  
  );
}
