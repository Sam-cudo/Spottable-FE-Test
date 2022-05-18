import React from 'react';
import logo from '../styles/logo.jpg';
import '../styles/mainHeader.css';

export default function MainHeader() {

  return (
    <header>
        <div className= 'heading'>
            <div className="logo">
                <img src={logo} alt="SpottableLogo"/>
            </div>
            <div className= 'title'>
                <h1>YOUR SPOTTABLE TEAM</h1>
                <h2>Spottable supports you all throughout</h2>
            </div>
        </div>
    </header>
  )
}