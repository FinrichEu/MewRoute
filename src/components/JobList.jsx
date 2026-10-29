import React from 'react'
import JobCard from './JobCard.jsx'

export default function JobList({
  jobsarray,
  onSave,
  onRemove,
  savedJobIds,
  emptyMessage = 'No jobs available.', }) {
  if (jobsarray.length === 0) {
    return (
      <div className="job-list">
        <p>{emptyMessage}</p>
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

