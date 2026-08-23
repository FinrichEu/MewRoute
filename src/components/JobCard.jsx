import React from 'react'

export default function JobCard({job}) {
    return (
        <article className="job-card">
            <div className="job-logo">{job.logo}
            </div>

            <div className="job-info">
                <h3>{job.title}</h3>
                <p>{job.company} · {job.location}</p>

                <div className="job-tags">
                    <span> {job.tags[0]} </span>
                    <span> {job.tags[1]} </span>
                    <span> {job.tags[2]} </span>
                </div>
            </div>

            <div className="job-actions">
                <button type="button">Save</button>
                <button type="button">View details</button>
            </div>
        </article>
    )
}
