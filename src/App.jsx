import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Navigation from './components/Navigation.jsx'
import JobsPage from './pages/JobsPage.jsx'
import ApplicationsPage from './pages/ApplicationsPage.jsx'
import { useState } from 'react'
import { Routes, Route } from 'react-router'

function App() {
  const [savedJobIds, setSavedJobIds] = useState([]);

  return (
    <div className="wrapper">
      <Header />
      <Navigation count={savedJobIds.length} />
      <Routes>
        <Route
          path="/"
          element={<JobsPage setSavedJobIds={setSavedJobIds} savedJobIds={savedJobIds}/>}
        />
        <Route
          path="/applications"
          element={<ApplicationsPage savedJobIds={savedJobIds} setSavedJobIds={setSavedJobIds}/>}
        />
      </Routes>
    </div>
  )
}

export default App
