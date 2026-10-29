import React from 'react'
import { useState, useEffect } from 'react'
import SearchFilters from '../components/SearchFilters.jsx'
import JobsFound from '../components/JobsFound.jsx'
import JobsList from '../components/JobList.jsx'
import Pagination from '../components/Pagination/Pagination.jsx'
import ErrorState from '../components/ErrorState.jsx';
import selectJobs from '../hooks/selectJobs.js';

/* Receive the saved job IDs (savedJobIds) and the function to update them (setSavedJobIds) from App */

export default function JobsPage({
  jobs, onSave, savedJobIds, loading, error, onRetry, }) {

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
    return <ErrorState message={error} onRetry={onRetry} />;
  }

  if (!jobs || jobs.length === 0) {
    return <p>No jobs found.</p>;
  }

  const matchingJobs = selectJobs(jobs, {
    search,
    location,
    workformat,
    sortBy,
  });

  const totalPages = Math.ceil(matchingJobs.length / jobsPerPage);

  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;

  const visibleJobs = matchingJobs.slice(startIndex, endIndex);

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
        count={matchingJobs.length}
        sortBy={sortBy}
        setSortBy={setSortBy} />
      <JobsList
        jobsarray={visibleJobs}
        onSave={onSave}
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