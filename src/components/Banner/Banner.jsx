import React from 'react'
import banner from '../../assets/images/Banner/Healfify-no-text.png'

export default function Banner() {
    return (
        <div className='banner-container'>
        <div className="card text-dark ">
        <img src={banner} className="card-img banner-picture" alt="CPW-banner" />
        <div className="card-img-overlay container d-flex justify-content-center align-bottom flex-column mt-5 bannerBox">
        <h1 className="card-title text-dark banner-text vibrate-1">healify</h1>
        <p className="card-text fs-1">The App everybody need to get the right nutritional values!</p>
        <p className="card-text fs-1">This application helps you to get detailed information about the food products so you can be prepared for gym, workout, and diet procedures.</p>
        </div>
        </div>
        </div>
    )
}
