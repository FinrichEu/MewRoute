import React from 'react'
import { useState } from 'react'
import { jobs } from '../data/jobs.js'
import SearchFilters from '../components/SearchFilters.jsx'
import JobsFound from '../components/JobsFound.jsx'
import JobsList from '../components/JobList.jsx'

/* Receive the saved job IDs (savedJobIds) and the function to update them (setSavedJobIds) from App */

export default function JobsPage({setSavedJobIds, savedJobIds}) {

  /* Store the selected sort option */
  const [sortBy, setSortBy] = useState("default");

  /* Store the search text entered by the user */
  const [search, setSearch] = useState("");

  /* Store the location entered or selected by the user */
  const [location, setlocation] = useState("");

  /* Store the selected work format */
  const [workformat, setWorkformat] = useState("");

  /* Create a copy of the jobs array and sort it by date */
  /* [...jobs] copies the array. .sort() modifies the array it is called on */
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
        savedJobIds={savedJobIds}
        />
    </div>
  )
}
