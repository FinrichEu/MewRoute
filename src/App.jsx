import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import JobsPage from './pages/JobsPage.jsx'
import ApplicationsPage from './pages/ApplicationsPage.jsx'
import JobDetailsPage from './pages/JobDetailsPage.jsx'
import useSavedJobs from './hooks/useSavedJobs.js';
import useJobs from './hooks/useJobs.js';
import { Routes, Route, Link } from 'react-router'

function App() {

  /* I receive job openings, loading status, an error, and a retry function */
  const { jobs, loading, error, retry } = useJobs();
  /* Keep saved snapshots and use fetched jobs to recover old saved IDs. */
  const { savedJobs, savedJobIds, saveJob, removeJob, clearSavedJobs } = useSavedJobs(jobs);

  return (
    <div className="wrapper">
      <Header count={savedJobIds.length} />
      {/* passing the number of saved job postings to the navigation component */}
      <Routes>
        <Route
          path="/"
          element={<JobsPage
            jobs={jobs}
            loading={loading}
            error={error}
            savedJobIds={savedJobIds}
            onSave={saveJob}
            onRemove={removeJob}
            onRetry={retry} />}
        />
        <Route
          path="/applications"
          element={<ApplicationsPage
            savedJobs={savedJobs}
            savedJobIds={savedJobIds}
            onRemove={removeJob}
            onClear={clearSavedJobs} />}
        />
        <Route
          path="/jobs/:jobId"
          element={<JobDetailsPage
            jobs={jobs}
            savedJobs={savedJobs}
            loading={loading}
            error={error}
            onRetry={retry} />}
        />
        {/* Show a helpful page when no other route matches the address */}
        <Route
          path="*"
          element={
            <main className="empty-message">
              <h1 className="jobs-title">404 — Page not found</h1>
              <Link className="job-link" to="/">Back to vacancies</Link>
            </main>
          }
        />
      </Routes>
      {/* Display the footer on every page. */}
      <Footer />
    </div>
  )
}

export default App
