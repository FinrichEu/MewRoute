import React from 'react'
import { useParams } from 'react-router';
import ErrorState from '../components/UI/ErrorState.jsx';
import JobCard from '../components/JobCard.jsx';

export default function JobDetailsPage({ jobs, savedJobs, loading, error, onRetry }) {

  /* Get the job ID from the current URL */
  const params = useParams();
  const jobId = params.jobId;

  /* Fall back to the saved snapshot if the job is missing from the API feed. */
  const foundJob = jobs.find((currentJob) => {
    return currentJob.slug === jobId;
  }) || savedJobs.find((savedJob) => {
    return savedJob.slug === jobId;
  });

  if (!foundJob && loading) {
    return <p>Loading job...</p>;
  }

  if (!foundJob && error) {
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
      {/* Open the job URL provided by the API in a new tab. */}
      {foundJob.url && (
        <a
          className="job-apply"
          href={foundJob.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply for this job
        </a>
      )}
    </div>
  )
}
