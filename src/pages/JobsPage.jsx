import React from 'react'
import { useState, useEffect } from 'react'
import SearchFilters from '../components/SearchFilters.jsx'
import JobsFound from '../components/JobsFound.jsx'
import JobsList from '../components/JobList.jsx'
import Pagination from '../components/UI/Pagination.jsx'
import ErrorState from '../components/UI/ErrorState.jsx';
import selectJobs from '../utils/selectJobs.js';

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

  /* Store the current page number for pagination */
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

  /* Filter and sort the jobs based on the selected criteria */

  const matchingJobs = selectJobs(jobs, {
    search,
    location,
    workformat,
    sortBy,
  });

  /* jobsPerPage = 20 (optional) */
  /* Calculate the number of pages, rounding up. */
  const totalPages = Math.ceil(matchingJobs.length / jobsPerPage);

  /* Calculating the boundaries of the current page */
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;

  /* Only take job openings for the current page */
  const visibleJobs = matchingJobs.slice(startIndex, endIndex);

  return (
    <div className="jobs-page">
      <SearchFilters
        search={search}
        setSearch={(value) => {
          /* Update the search text */
          setSearch(value);
          /* Return the user to the first page of results */
          setCurrentPage(1);
        }}
        location={location}
        setlocation={(value) => {
          /* Update the search text */
          setlocation(value);
          /* Return the user to the first page of results */
          setCurrentPage(1);
        }}
        workformat={workformat}
        setWorkformat={(value) => {
          /* Update the search text */
          setWorkformat(value);
          /* Return the user to the first page of results */
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