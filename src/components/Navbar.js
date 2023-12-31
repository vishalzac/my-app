import react, { useState } from 'react'
import { Link } from 'react-router-dom';


export default function Navbar(props){

    return(
        <>
  <nav className={`navbar navbar-expand-lg navbar-${props.text} bg-${props.mode}`} >
  <div className="container-fluid " >
    <Link className="navbar-brand" to="/">{props.name}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="navbar-brand"  to='/about'>
          About us 
          </Link>
        </li>
      </ul>
      <div class="form-check form-switch" style={({color:"green"})} >
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
      <label class="form-check-label" for="flexSwitchCheckDefault" >{props.modeMessage}</label>
    </div>
    </div>
  </div>
</nav>
        </>


    )
}

