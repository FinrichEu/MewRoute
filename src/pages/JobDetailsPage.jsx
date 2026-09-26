import React from 'react'
import { useParams } from 'react-router';

export default function JobDetailsPage({jobs}) {

  const params = useParams();
  const jobId = params.jobId;

  const foundJob = jobs.find((currentJob) => {
    return currentJob.slug === jobId;
  });

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
