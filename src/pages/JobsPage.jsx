import React from 'react'
import { useState } from 'react'
import { jobs } from '../data/jobs.js'
import SearchFilters from '../components/SearchFilters.jsx'
import JobsFound from '../components/JobsFound.jsx'
import JobsList from '../components/JobList.jsx'

export default function JobsPage({setSavedJobIds}) {

  const [sortBy, setSortBy] = useState("default");
  const [search, setSearch] = useState("");
  const [location, setlocation] = useState("");
  const [workformat, setWorkformat] = useState("");

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

  const remoteSearched = filteredJobs.filter((job) => {
    if (workformat === "remote") {
      return job.remote === true;
    }

    if (workformat === "not-remote") {
      return job.remote === false;
    }

    return true;
  }); 

  return (
    <div className="jobs-page">
      <SearchFilters
        location={location}
        setlocation={setlocation}
        search={search}
        setSearch={setSearch}
        workformat={workformat}
        setWorkformat={setWorkformat} />
      <JobsFound
        count={remoteSearched.length}
        sortBy={sortBy}
        setSortBy={setSortBy} />
      <JobsList
        jobsarray={remoteSearched} 
        setSavedJobIds={setSavedJobIds}
        />
    </div>
  )
}
