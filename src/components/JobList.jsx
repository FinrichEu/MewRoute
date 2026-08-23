import React from 'react'
import JobCard from './JobCard.jsx'

export default function JobList({ jobsarray }) {
  return (
    <div className="job-list">
      {jobsarray.map((item) => (
        <JobCard
          key={item.id}
          job={item}
        />
      ))}
    </div>
  )
}

