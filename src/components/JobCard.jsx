import React from 'react'
import { Link } from 'react-router';

export default function JobCard({ job, setSavedJobIds, savedJobIds, handleRemove }) {

    const isSaved = savedJobIds.includes(job.slug);

    return (
        <article className="job-card">
            <div className="job-logo">{job.company_name.slice(0, 2).toUpperCase()}
            </div>

            <div className="job-info">
                <h3>{job.title}</h3>
                <p>{job.company_name} · {job.location}</p>

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
                        onClick={() => handleRemove(job.slug)}>Remove</button>) :
                    (<button
                        disabled={isSaved}
                        type="button"
                        onClick={() => {
                            setSavedJobIds((oldArray) => {
                                if (oldArray.includes(job.slug)) {
                                    return oldArray;
                                }

                                return [...oldArray, job.slug];
                            });
                        }}>
                        {isSaved ? 'Saved' : 'Save'}
                    </button>)}
                <Link className="job-link"
                    /* Backticks (` `) create a template string that lets you insert variables.
                    ${ ... } inserts the value of the JavaScript expression inside the braces into the string.
                    job.id gets the id property from the job object.
                    /jobs/ is the fixed part of the page URL.
                    { ... } after to= tells JSX to treat what is inside as JavaScript, not plain text. */
                    to={`/jobs/${job.slug}`}>
                    View details
                </Link>
            </div>
        </article>
    )
}
