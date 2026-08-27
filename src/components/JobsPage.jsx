import React from 'react'
import { useState } from 'react'
import SearchFilters from './SearchFilters.jsx'
import JobsFound from './JobsFound.jsx'
import JobsList from './JobList.jsx'

export default function JobsPage() {

  const [sortBy, setSortBy] = useState("default");
  const [search, setSearch] = useState("");
  const [location, setlocation] = useState("");

  const jobs = [
    {
      id: 1,
      logo: 'NC',
      title: 'Junior Frontend Developer',
      company: 'North Cloud',
      location: 'Berlin, Germany',
      tags: ['Remote', 'React'],
      created_at: "1638006745",
      job_types: ["Internship"]
    },
    {
      id: 2,
      logo: 'NC',
      title: 'Senior Frontend Developer',
      company: 'North Cloud',
      location: 'Poland',
      tags: ['Remote', 'React'],
      created_at: "1638006747",
      job_types: ["full time"]
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

  const searchedJobs = jobssorted.filter((job) => {
    if (search === "") {
      return true;
    }
    return job.title
    .toLowerCase()
    .includes(search.toLowerCase()) || job.company.toLowerCase().includes(search.toLowerCase());
  });

  const filteredJobs = searchedJobs.filter((job) => {
    if (location === "") {
      return true;
    }

    if (!job.location) {
      return false;
    }

    return job.location
    .toLowerCase()
    .includes(location.toLowerCase())
  });

  return (
    <div className="jobs-page">
      <SearchFilters location={location} setlocation={setlocation} search={search} setSearch={setSearch} />
      <JobsFound count={jobssorted.length} sortBy={sortBy} setSortBy={setSortBy} />
      <JobsList jobsarray={filteredJobs} />
    </div>
  )
}
