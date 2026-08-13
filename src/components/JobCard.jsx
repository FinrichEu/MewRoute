import React from 'react'

export default function JobCard() {
    return (
        <article className="job-card">
            <div className="job-logo">NC
            </div>

            <div className="job-info">
                <h3>Junior Frontend Developer</h3>
                <p>North Cloud · Berlin, Germany</p>

                <div className="job-tags">
                    <span> Remote </span>
                    <span> Visa support </span>
                    <span> React </span>
                </div>
            </div>

            <div className="job-actions">
                <button type="button">Save</button>
                <button type="button">View details</button>
            </div>
        </article>
    )
}
