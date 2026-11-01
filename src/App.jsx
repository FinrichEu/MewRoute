import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Navigation from './components/Navigation.jsx'
import JobsPage from './pages/JobsPage.jsx'
import ApplicationsPage from './pages/ApplicationsPage.jsx'
import JobDetailsPage from './pages/JobDetailsPage.jsx'
import useSavedJobs from './hooks/useSavedJobs.js';
import useJobs from './hooks/useJobs.js';
import { Routes, Route, } from 'react-router'

function App() {

  /* I receive the saved job IDs and functions to add and remove them */
  const { savedJobIds, saveJob, removeJob } = useSavedJobs();
  /* I receive job openings, loading status, an error, and a retry function */
  const { jobs, loading, error, retry } = useJobs();

  return (
    <div className="wrapper">
      <Header />
      <Navigation count={savedJobIds.length} />
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
            onRetry={retry} />}
        />
        <Route
          path="/applications"
          element={<ApplicationsPage
            jobs={jobs}
            savedJobIds={savedJobIds}
            onRemove={removeJob}
            loading={loading}
            error={error}
            onRetry={retry} />}
        />
        <Route
          path="/jobs/:jobId"
          element={<JobDetailsPage
            jobs={jobs}
            loading={loading}
            error={error}
            onRetry={retry} />}
        />
      </Routes>
    </div>
  )
}

export default App
