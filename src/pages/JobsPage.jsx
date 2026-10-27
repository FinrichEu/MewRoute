import React from 'react'
import { useState, useEffect} from 'react'
import SearchFilters from '../components/SearchFilters.jsx'
import JobsFound from '../components/JobsFound.jsx'
import JobsList from '../components/JobList.jsx'
import Pagination from '../components/Pagination/Pagination.jsx'

/* Receive the saved job IDs (savedJobIds) and the function to update them (setSavedJobIds) from App */

export default function JobsPage({
  jobs, setSavedJobIds, savedJobIds, loading, error, onRetry,}) {

  /* Store the selected sort option */
  const [sortBy, setSortBy] = useState("default");

  /* Store the search text entered by the user */
  const [search, setSearch] = useState("");

  /* Store the location entered or selected by the user */
  const [location, setlocation] = useState("");

  /* Store the selected work format */
  const [workformat, setWorkformat] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [jobs]);

  const jobsPerPage = 20;

  if (loading) {
    return <p>Loading jobs...</p>;
  }

  /* Call onRetry when the button is clicked to retry fetching jobs */
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={onRetry}>Retry!</button>
      </div>
    );
  }

  if (!jobs || jobs.length === 0) {
    return <p>No jobs found.</p>;
  }

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

  const normalizedSearch = search.trim().toLowerCase();
  const normalizedLocation = location.trim().toLowerCase();

  const searchedJobs = jobssorted.filter((job) => {
    if (normalizedSearch === "") {
      return true;
    }

    return (
      job.title.toLowerCase().includes(normalizedSearch) ||
      job.company_name.toLowerCase().includes(normalizedSearch)
    );
  });

  const filteredJobs = searchedJobs.filter((job) => {
    if (normalizedLocation === "") {
      return true;
    }

    if (!job.location) {
      return false;
    }

    return job.location.toLowerCase().includes(normalizedLocation);
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

  const totalPages = Math.ceil(remoteSearched.length / jobsPerPage);

  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;

  const visibleJobs = remoteSearched.slice(startIndex, endIndex);

  return (
    <div className="jobs-page">
      <SearchFilters
        search={search}
        setSearch={(value) => {
          setSearch(value);
          setCurrentPage(1);
        }}
        location={location}
        setlocation={(value) => {
          setlocation(value);
          setCurrentPage(1);
        }}
        workformat={workformat}
        setWorkformat={(value) => {
          setWorkformat(value);
          setCurrentPage(1);
        }}
      />
      <JobsFound
        count={remoteSearched.length}
        sortBy={sortBy}
        setSortBy={setSortBy} />
      <JobsList
        jobsarray={visibleJobs}
        setSavedJobIds={setSavedJobIds}
        savedJobIds={savedJobIds}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  )
}