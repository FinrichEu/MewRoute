import React from 'react'
import JobCard from '../components/JobCard.jsx'

export default function ApplicationsPage({ jobs, savedJobIds, setSavedJobIds, loading, error, onRetry }) {

  const savedJobs = jobs.filter((job) => {
    return savedJobIds.includes(job.slug);
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

  if (loading) {
    return <p>Loading saved jobs...</p>;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={onRetry}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      {savedJobs.length === 0
        ? <p>No saved jobs yet xdxdxd</p>
        : savedJobs.map((job) => (
          <JobCard
            key={job.slug}
            job={job}
            savedJobIds={savedJobIds}
            handleRemove={handleRemove}
          />))
      }
    </div>
  )
}
