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
}
