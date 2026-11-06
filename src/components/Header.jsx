import React from 'react'
import logo from "../assets/img/catlogoflexwhite.png";

/* Site header */

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">

        <img src={logo} alt="catlogo" className="logo-img" />

        <div className="logo-text">
          
          <span className="logo">JobFlexCat</span>
          <p className="tagline">Job search and application tracking</p>

        </div>
      </div>
    </header >
  )
}
