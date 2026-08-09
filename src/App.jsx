import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Navigation from './components/Navigation.jsx'
import JobsPage from './components/JobsPage.jsx'
import './App.css'

function App() {

  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      <JobsPage />
    </div>
  )
}

export default App
