import React from 'react'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Crad/Card'
import SearchMenu from '../../components/SearchMenu/SearchMenu'

export default function Landing() {
    return (
        <div className='sectionContainer'>
            <h1 className="landing-text">Ananapp Pineapp Nutrify </h1>
            <Banner />
            <SearchMenu />
            <Card />
            <h2></h2>
            <h3></h3>
        </div>
    )
}
