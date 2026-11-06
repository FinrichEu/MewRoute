import React from 'react'
import ErrorState from '../components/UI/ErrorState.jsx';
import JobList from '../components/JobList.jsx';

/* Display saved job postings, loading status, and errors */
/* Add the ability to delete job postings from the saved list */

export default function ApplicationsPage({ jobs, savedJobIds, onRemove, loading, error, onRetry }) {

  /* From the uploaded job postings, I select the ones the user has saved */
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
