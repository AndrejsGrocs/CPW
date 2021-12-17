import { useState, useEffect } from 'react';
import { getUnsplashData } from '../../services/apiServices';

export default function SearchMenu({ image, setImage, setImageData }) {
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
  const onClickButton = (e) => {
    setImage();
    getImageData(image);
  };
  //*********************************************** */

  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log(image);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandle}>
        <h2>Enter your Product Name </h2>
        <input
          className="input"
          type="text"
          id="search"
          placeholder="example: Enter your food"
          onChange={onChangeImage}
        />

        <button onClick={onClickButton}>Submit</button>
      </form>
    </div>
  );
}
