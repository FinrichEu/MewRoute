import React from 'react'
import SearchFilters from './SearchFilters.jsx'
import JobsFound from './JobsFound.jsx'

export default function JobsPage() {
  return (
    <div className="jobs-page">
      <SearchFilters />
      <JobsFound />
    </div>
  )
}
