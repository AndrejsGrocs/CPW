import { useState, useEffect } from 'react';
import { getUnsplashData } from '../../services/apiServices';
import nutritionApi from '../../services/NutritionApi';
import nutritionApiImg from '../../services/NutritiousApiImg';

export default function SearchMenu({
  image,
  setImage,
  setImageData,
  setFacts,
  setImageFromEdamam,
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
    const setImageFromEdamamResult = nutritionApiImg(image);
    setImageFromEdamam(setImageFromEdamamResult);
  };

  //*********************************************** */

  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log(image);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandle}>
        <h2>Enter your Product {setImage} </h2>
        <input
          className="input"
          type="text"
          id="search"
          placeholder="example: Search for 1 Apple"
          onChange={onChangeImage}
        />

        <button onClick={onClickButton}>Submit</button>
      </form>
    </div>
  );
}
