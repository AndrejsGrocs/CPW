<<<<<<< HEAD
import React from 'react'
import {bootstrap} from 'react-bootstrap'

export default function SearchMenu() {
    return (
        <div className='container'>
        
        <div className="input-group">
  <div className="input-group-text">
    <input className="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input"/>
   
  </div>
  <input type="text" className="form-control" aria-label="Text input with radio button"/> 
</div>
<div className="input-group">
  <div className="input-group-text">
    <input className="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input"/>
  </div>
  <input type="text" className="form-control" aria-label="Text input with radio button"/>
</div>
<div className="input-group">
  <div className="input-group-text">
    <input className="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input"/>
  </div>
  <input type="text" className="form-control" aria-label="Text input with radio button"/>
</div>
<div className="input-group input-group-lg">
  <span className="input-group-text" id="inputGroup-sizing-lg">SEARCH ME HERE => </span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
</div>
<div className='m-5 d-flex justify-content-evenly'>
<button type="button" className="btn btn-primary btn-lg">SEARCH!</button>
</div>
</div>
    )
=======
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
>>>>>>> ec772528300a475f3daa3c6ab89b2fdf07b8da3a
}
