import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Navigation from './components/Navigation.jsx'
import JobsPage from './pages/JobsPage.jsx'
import ApplicationsPage from './pages/ApplicationsPage.jsx'
import JobDetailsPage from './pages/JobDetailsPage.jsx'
import { useState, useEffect } from 'react'
import { Routes, Route,  } from 'react-router'

function App() {
  /* Initialize the state with saved IDs, or an empty array if none are stored */
  /* Store the IDs of jobs saved by the user */

  /* savedJobIds - the current state (an array of job IDs) */
  /* setSavedJobIds - the function used to update this state */
  /* The array is empty if no job IDs have been saved yet */

  const [savedJobIds, setSavedJobIds] = useState(() => {
    const savedIds = localStorage.getItem('savedJobIds');
    /* Check whether localStorage contains a saved value */
    if (savedIds) {
      return JSON.parse(savedIds);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('savedJobIds', JSON.stringify(savedJobIds));
    // Save the IDs to localStorage whenever savedJobIds changes
  }, [savedJobIds]);

  return (
    <div className="wrapper">
      <Header />
      <Navigation count={savedJobIds.length} />
      <Routes>
        <Route
          path="/"
          element={<JobsPage setSavedJobIds={setSavedJobIds} savedJobIds={savedJobIds} />}
        />
        <Route
          path="/applications"
          element={<ApplicationsPage savedJobIds={savedJobIds} setSavedJobIds={setSavedJobIds} />}
        />
        <Route
          path="/jobs/:jobId"
          element={<JobDetailsPage />}
        />
      </Routes>
    </div>
  )
}

export default App
