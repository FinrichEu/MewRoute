import React from 'react'
import JobCard from './JobCard.jsx'

/* Create cards from the array of job openings passed in */
/* Pass them the save status and the button functions */
/* If the list is empty, display the message that was passed in */

export default function JobList({
  jobsarray,
  onSave,
  onRemove,
  savedJobIds,
  emptyMessage = 'No jobs available.', }) {
  if (jobsarray.length === 0) {
    return (
      <div className="job-list">
        <p className="empty-message">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="job-list">
      {jobsarray.map((item) => (
        <JobCard
          key={item.slug}
          job={item}
          isSaved={savedJobIds.includes(item.slug)}
          onSave={onSave}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}

