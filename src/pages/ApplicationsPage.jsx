import React from 'react'
import { jobs } from '../data/jobs.js'
import JobCard from '../components/JobCard.jsx'

export default function ApplicationsPage({ savedJobIds, setSavedJobIds }) {

  const savedJobs = jobs.filter((job) => {
    return savedJobIds.includes(job.id);
  });

  function handleRemove(jobId) {
    setSavedJobIds((oldArray) => {
      return oldArray.filter((currentId) => {
        if (currentId === jobId) {
          return false;
        }

        return true;
      });
    });
  }


  return (
    <div>
      {savedJobs.length === 0
        ? <p>No saved jobs yet xdxdxd</p>
        : savedJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            savedJobIds={savedJobIds}
            handleRemove={handleRemove}
          />))
      }
    </div>
  )
}
