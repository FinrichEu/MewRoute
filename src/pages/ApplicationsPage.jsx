import { useEffect, useState } from 'react';
import JobList from '../components/JobList.jsx';
import Pagination from '../components/UI/Pagination.jsx';

/* Display saved job snapshots without depending on the current API response. */
/* Add the ability to delete job postings from the saved list */

export default function ApplicationsPage({ savedJobs, savedJobIds, onRemove, onClear }) {

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 20;

  const totalPages = Math.ceil(savedJobs.length / jobsPerPage);
  const safePage = Math.min(currentPage, Math.max(1, totalPages));

  /* Keep the current page valid after removing saved jobs or clearing the list. */
  useEffect(() => {
    if (currentPage !== safePage) {
      setCurrentPage(safePage);
    }
  }, [currentPage, safePage]);

  const startIndex = (safePage - 1) * jobsPerPage;
  const visibleJobs = savedJobs.slice(startIndex, startIndex + jobsPerPage);

  return (
    <div className="applications-page">
      <div className="applications-header">
        <div className="jobs-header">
          <h1 className="jobs-title">Saved jobs</h1>
          <span className="jobs-count">{savedJobIds.length}</span>
        </div>
        {savedJobIds.length > 0 && (
          <button className="clear-saved-jobs" type="button" onClick={onClear}>
            Clear saved jobs
          </button>
        )}
      </div>
      <JobList
        jobsarray={visibleJobs}
        savedJobIds={savedJobIds}
        onRemove={onRemove}
        emptyMessage="No saved jobs yet."
      />
      <Pagination
        currentPage={safePage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  )
}
