import React from 'react'
import ErrorState from '../components/UI/ErrorState.jsx';
import JobList from '../components/JobList.jsx';

export default function ApplicationsPage({ jobs, savedJobIds, onRemove, loading, error, onRetry }) {

  const savedJobs = jobs.filter((job) => {
    return savedJobIds.includes(job.slug);
  });

  if (loading) {
    return <p>Loading saved jobs...</p>;
  }

  if (error) {
    return <ErrorState message={error} onRetry={onRetry} />;
  }

  return (
      <JobList
        jobsarray={savedJobs}
        savedJobIds={savedJobIds}
        onRemove={onRemove}
        emptyMessage="No saved jobs yet."
      />
  )
}
