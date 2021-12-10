import React from 'react'

export default function SearchMenu() {
    return (
        <div>
        <form>
           {/*  <label htmlFor="vegan">Vegan</label>
             <input type="radio" name="type" id="episode"
                
                 value = "episode"
                 />


                 <label htmlFor="vegetarian">Vegetarian</label>
             <input type="radio" name="type" id="episode"
                
                 value = "episode"
                 />


                 <label htmlFor="flexi">Flexi</label>
             <input type="radio" name="type" id="episode"
                
                 value = "episode"
                 /> */}
                  <h2>Enter your Product Name </h2>
                <input className='input' type="text" id="search" placeholder="example: Enter your food"
                
            />


              <button type="submit">Submit </button>

        </form>
        </div>
    )
}
