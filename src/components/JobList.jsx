import React from 'react'
import JobCard from './JobCard.jsx'

export default function JobList({ jobsarray, setSavedJobIds, savedJobIds }) {
  if (jobsarray.length === 0) {
    return (
      <div className="job-list">
        <p>No jobs available.</p>
      </div>
    )
  }

  return (
    <div className="job-list">
      {jobsarray.map((item) => (
        <JobCard
          key={item.id}
          job={item}
          setSavedJobIds={setSavedJobIds}
          savedJobIds={savedJobIds}
        />
      ))}
    </div>
  )
}

