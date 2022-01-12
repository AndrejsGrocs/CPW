import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import AboutUs from '../views/AboutUs/AboutUs'
import Landing from '../views/Landing/Landing'
import NotFound from '../views/NotFound/NotFound'
import Navbar from '../components/Navbar/Navbar'

export default function MainRouter() {
    return (
        <BrowserRouter>
            <Navbar />
            <main>
            <Switch>
               <Route path='/' exact component={Landing}/>
               <Route path='/aboutus' component={AboutUs}/>
               <Route component={NotFound}/>
         </Switch>
         </main>
         <Footer />

       </BrowserRouter>
    )
}
