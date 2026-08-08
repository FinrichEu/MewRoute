import React from 'react'
import logo from "../assets/img/catlogoflexwhite.png";

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
      <button className="add-app-container">
        <span>+</span>
        <span>Add application</span>
      </button>
    </header >
  )
}
