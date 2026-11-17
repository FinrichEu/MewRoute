import React from 'react'
import { Link } from 'react-router';
import { FiBookmark, FiMapPin, FiArrowRight } from "react-icons/fi";

/* Display a card for a single job opening with its details, 
a Save or Delete button, and a link to the full details */

export default function JobCard({ job, isSaved, onSave, onRemove, showActions = true }) {

    return (
        <article className="job-card">
            <div className="job-header">
                <div className="job-company">
                    <div className="job-logo">
                        {job.company_name.slice(0, 2).toUpperCase()}
                    </div>

                    <div className="job-company-info">
                        <h4>{job.company_name}</h4>
                        {job.location?.trim() && (
                            <p className="job-location">
                                <FiMapPin aria-hidden="true" />
                                {job.location}
                            </p>
                        )}
                    </div>
                </div>

                {showActions && (
                    <button
                        className="job-save"
                        type="button"
                        aria-pressed={isSaved}
                        aria-label={
                            isSaved ? "Remove saved job" : "Save job"
                        }
                        /* Save the full job object so its card can be restored later. */
                        onClick={() =>
                            isSaved ? onRemove(job.slug) : onSave(job)
                        }
                    >
                        <FiBookmark
                            aria-hidden="true"
                            fill={isSaved ? "currentColor" : "none"}
                        />
                    </button>
                )}
            </div>

            <h3 className="job-title">{job.title}</h3>

            <div className="job-footer">
                <div className="job-tags">
                    {job.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>

                {showActions && (
                    <Link
                        className="job-link"
                        to={`/jobs/${job.slug}`}
                        aria-label={`View details for ${job.title}`}
                    >
                        View details
                        <FiArrowRight aria-hidden="true" />
                    </Link>
                )}
            </div>
        </article>
    )
}
