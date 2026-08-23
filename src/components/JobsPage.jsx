import React from 'react'
import { useState } from 'react'
import SearchFilters from './SearchFilters.jsx'
import JobsFound from './JobsFound.jsx'
import JobsList from './JobList.jsx'

export default function JobsPage() {

  const [sortBy, setSortBy] = useState("default");

  const jobs = [
    {
      id: 1,
      logo: 'NC',
      title: 'Junior Frontend Developer',
      company: 'North Cloud',
      location: 'Berlin, Germany',
      tags: ['Remote', 'Visa support', 'React'],
      created_at: "1638006745",
    },
    {
      id: 2,
      logo: 'NC',
      title: 'Senior Frontend Developer',
      company: 'North Cloud',
      location: 'Berlin, Germany',
      tags: ['Remote', 'Visa support', 'React'],
      created_at: "1638006747",
    }
  ]

  const jobssorted = [...jobs].sort((job1, job2) => {
    if (sortBy === "newest") {
      return job2.created_at - job1.created_at;
    }
    if (sortBy === 'oldest') {
      return job1.created_at - job2.created_at;
    }

    return 0
  })

  return (
    <div className="jobs-page">
      <SearchFilters />
      <JobsFound count={jobs.length} sortBy={sortBy} setSortBy={setSortBy} />
      <JobsList jobsarray={jobssorted} />
    </div>
  )
}
