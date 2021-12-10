import React from 'react'
import pic from '../../assets/images/Nutrition_Ampel/B.png'

export default function Card() {
    return (
        <div>
            <figure className="image-block">
            <h3>Your Product is Pineapple</h3>
               <img className='card-image' src="https://www.frischeparadies-shop.de/media/image/0d/5c/66/OS_20122_1_Ananas.jpg"/>
               <figcaption>
                   
                     <h3>Pineapples health rating is:</h3>
                    <img className='rating-image' src={pic}/>
                    <br/>
                   <button>More info ...</button>
               </figcaption>
            </figure>
        </div>
    )
}
