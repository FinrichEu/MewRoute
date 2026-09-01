import React from 'react'
import { jobs } from '../data/jobs.js'
import JobCard from '../components/JobCard.jsx'

export default function ApplicationsPage({ savedJobIds }) {

  const savedJobs = jobs.filter((job) => {
    return savedJobIds.includes(job.id);
  });


  return (
    <div>
      {savedJobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
        />
      ))}
    </div>
  )
}
