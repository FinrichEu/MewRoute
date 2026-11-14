import React from 'react'
import { useParams } from 'react-router';
import ErrorState from '../components/UI/ErrorState.jsx';
import JobCard from '../components/JobCard.jsx';

export default function JobDetailsPage({ jobs, loading, error, onRetry }) {

  /* Get the job ID from the current URL */
  const params = useParams();
  const jobId = params.jobId;

  /* Searching for a vacancy whose slug matches the identifier from the URL */
  const foundJob = jobs.find((currentJob) => {
    return currentJob.slug === jobId;
  });

  if (loading) {
    return <p>Loading job...</p>;
  }

  if (error) {
    return <ErrorState message={error} onRetry={onRetry} />;
  }

  if (!foundJob) {
    return <p>Job not found</p>;
  }

  return (
    <div className="job-details">
      <JobCard job={foundJob} showActions={false} />
      <h1 className="job-title">About the role:</h1>
      <p>{foundJob.title}</p>
      <p>{foundJob.company_name}</p>
      <p>{foundJob.location}</p>
    </div>
  )
}
