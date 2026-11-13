import { NavLink } from "react-router";
import { SlGrid, SlFolder } from "react-icons/sl";

/* Display links to the general list and saved job postings */
/* Display the number of saved job postings, obtained using the `count` function */

export default function Navigation({count}) {
    return (
        <nav className="navigation">
            <NavLink to="/" className="nav-item">
                <SlGrid className="vacancies-icon" />
                <span>Vacancies</span>
            </NavLink>

            <NavLink to="/applications" className="nav-item">
                <SlFolder className="applications-icon" />
                <span className="applications-text">My applications</span>
                <span className="applications-count">{count}</span>
            </NavLink>
        </nav>
    )
}
