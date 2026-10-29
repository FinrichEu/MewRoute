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

  const { savedJobIds, saveJob, removeJob } = useSavedJobs();
  const { jobs, loading, error, retry } = useJobs();

  return (
    <div className="wrapper">
      <Header />
      <Navigation count={savedJobIds.length} />
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
