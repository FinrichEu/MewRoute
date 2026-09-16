import React from 'react'
import { Link } from 'react-router';

export default function JobCard({ job, setSavedJobIds, savedJobIds, handleRemove }) {

    const isSaved = savedJobIds.includes(job.id);

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
                {handleRemove ? (
                    <button
                        type="button"
                        onClick={() => handleRemove(job.id)}>Remove</button>) :
                    (<button
                        disabled={isSaved}
                        type="button"
                        onClick={() => {
                            setSavedJobIds((oldArray) => {
                                if (oldArray.includes(job.id)) {
                                    return oldArray;
                                }

                                return [...oldArray, job.id];
                            });
                        }}>
                        {isSaved ? 'Saved' : 'Save'}
                    </button>)}
                <Link className="job-link" to={`/jobs/${job.id}`}> View details </Link>
            </div>
        </article>
    )
}
