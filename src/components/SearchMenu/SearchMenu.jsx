import { useState, useEffect } from 'react';
import nutritionApi from '../../services/NutritionApi';
import nutritionApiImg from '../../services/NutritiousApiImg';

export default function SearchMenu({
  searchInput,
  setSearchInput,
  setFacts,
  setImageFromEdamam,
}) {
  //*********************************************** */
  const onChangeSearchInput = (e) => {
    console.log('e.target.value console-log', e.target.value);
    return setSearchInput(e.target.value);
  };

  //*********************************************** */

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    const nutrtionApiResult = await nutritionApi(searchInput);
    setFacts(nutrtionApiResult);
    const setImageFromEdamamResult = await nutritionApiImg(searchInput);
    setImageFromEdamam(setImageFromEdamamResult);
  };

  //*********************************************** */

  return (
    <div>
      <form onSubmit={onSubmitHandle}>
        <h2>Enter your Product</h2>
        <input
          className="input"
          type="text"
          id="search"
          placeholder="example: Search for 1 Apple"
          onChange={onChangeSearchInput}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
