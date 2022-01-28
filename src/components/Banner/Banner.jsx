import React from 'react'
import banner from '../../assets/images/Banner/Healfify-no-text.png'

export default function Banner() {
    return (
        <div className='banner-container'>
        <div className="card text-dark ">
        <img src={banner} className="card-img banner-picture" alt="CPW-banner" />
        <div className="card-img-overlay container d-flex justify-content-center align-bottom flex-column mt-5 bannerBox">
        <h1 className="card-title text-dark banner-text vibrate-1">healify</h1>
        <p className="card-text fs-1">The App you need to plan your diet right! </p>
        <p className="card-text fs-1">This application provides you with the detailed nutrition facts about your food to achieve the aims you want: workout, diet, healthy lifestyle!</p>
        </div>
        </div>
        </div>
    )
}
