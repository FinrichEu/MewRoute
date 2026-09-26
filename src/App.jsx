import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Navigation from './components/Navigation.jsx'
import JobsPage from './pages/JobsPage.jsx'
import ApplicationsPage from './pages/ApplicationsPage.jsx'
import JobDetailsPage from './pages/JobDetailsPage.jsx'
import { useState, useEffect } from 'react'
import { Routes, Route, } from 'react-router'
import { getJobs } from './API/jobs.js'

function App() {
  /* Initialize the state with saved IDs, or an empty array if none are stored */
  /* Store the IDs of jobs saved by the user */

  /* savedJobIds - the current state (an array of job IDs) */
  /* setSavedJobIds - the function used to update this state */
  /* The array is empty if no job IDs have been saved yet */

  const [savedJobIds, setSavedJobIds] = useState(() => {
    const savedIds = localStorage.getItem('savedJobIds');
    if (!savedIds) {
      return [];
    }

    try {
      const parsedIds = JSON.parse(savedIds);
      if (!Array.isArray(parsedIds)) {
        return [];
      }

      /* API jobs use string slugs discard old numeric IDs and null entries */
      return parsedIds.filter((id) => typeof id === 'string' && id.length > 0);
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('savedJobIds', JSON.stringify(savedJobIds));
    /* Save the IDs to localStorage whenever savedJobIds changes */
  }, [savedJobIds]);

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function loadJobs() {
      const data = await getJobs();
      console.log(data.data[0]);

      setJobs(data.data);
    }

    loadJobs();
  }, []);


  return (
    <div className="wrapper">
      <Header />
      <Navigation count={savedJobIds.length} />
      <Routes>
        <Route
          path="/"
          element={<JobsPage jobs={jobs} setSavedJobIds={setSavedJobIds} savedJobIds={savedJobIds} />}
        />
        <Route
          path="/applications"
          element={<ApplicationsPage jobs={jobs} savedJobIds={savedJobIds} setSavedJobIds={setSavedJobIds} />}
        />
        <Route
          path="/jobs/:jobId"
          element={<JobDetailsPage jobs={jobs} />}
        />
      </Routes>
    </div>
  )
}

export default App
