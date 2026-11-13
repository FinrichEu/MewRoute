import logo from "../assets/img/catlogodlexcolor.png";
import Navigation from './Navigation.jsx'
import ThemeToggle from "./UI/ThemeToggle.jsx";

/* Site header */

export default function Header({ count }) {
  return (
    <header className="header">
      <div className="logo-container">

        <img src={logo} alt="catlogo" className="logo-img" />

        <div>
          <span className="logo">JobFlexCat</span>
        </div>
      </div>
      <Navigation count={count} />
      <ThemeToggle />
    </header >
  )
}
