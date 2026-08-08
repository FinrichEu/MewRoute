import React from 'react'

export default function Navigation() {
    return (
        <div className="navigation">
            <button className="vacancies-btn" type="button">
                <span>Vacancies</span>
            </button>

            <button className="applications-btn" type="button">
                <span className="applications-text">My applications</span>
                <span className="applications-count">2</span>
            </button>
        </div>
    )
}
