import React from 'react'
import { useParams } from 'react-router';

export default function JobDetailsPage({ jobs, loading, error, onRetry }) {

  const params = useParams();
  const jobId = params.jobId;

  const foundJob = jobs.find((currentJob) => {
    return currentJob.slug === jobId;
  });

  if (loading) {
    return <p>Loading job...</p>;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={onRetry}>Retry</button>
      </div>
    );
  }

  if (!foundJob) {
    return <p>Job not found</p>;
  }

  return (
    <div>
      <h1>{foundJob.title}</h1>
      <p>{foundJob.company_name}</p>
      <p>{foundJob.location}</p>
    </div>
  )
}
