import React from 'react'

export default function JobCard({logo, title, company, location, tags}) {
    return (
        <article className="job-card">
            <div className="job-logo">{logo}
            </div>

            <div className="job-info">
                <h3>{title}</h3>
                <p>{company} · {location}</p>

                <div className="job-tags">
                    <span> {tags[0]} </span>
                    <span> {tags[1]} </span>
                    <span> {tags[2]} </span>
                </div>
            </div>

            <div className="job-actions">
                <button type="button">Save</button>
                <button type="button">View details</button>
            </div>
        </article>
    )
}
