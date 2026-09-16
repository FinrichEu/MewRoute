import React from 'react'
import { useParams } from 'react-router';
import { jobs } from '../data/jobs.js';

export default function JobDetailsPage() {

  const params = useParams();
  const jobId = Number(params.jobId);

  const foundJob = jobs.find((currentJob) => {
    return currentJob.id === jobId;
  });

  if (!foundJob) {
    return <p>Job not found</p>;
  }

  return (
    <div>{foundJob.title}</div>
  )
}
