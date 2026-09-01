import React from 'react'
import { NavLink } from "react-router";

export default function Navigation() {
    return (
        <div className="navigation">
            <NavLink to="/" className="vacancies-btn">
                <span>Vacancies</span>
            </NavLink>

            <NavLink to="/applications" className="applications-btn">
                <span className="applications-text">My applications</span>
                <span className="applications-count">2</span>
            </NavLink>
        </div>
    )
}
