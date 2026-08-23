import React from 'react'

export default function JobsFound({ count, sortBy, setSortBy }) {
  return (
    <div className="jobs-block">
      <div className="jobs-header">
        <h2 className="jobs-title">Jobs Found</h2>
        <span className="jobs-count">{count} results</span>
      </div>
      <div className="sort-field">
        <label htmlFor="sort-by"></label>
        <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)} 
        id="sort-by" 
        >
          <option value="default">Sort by</option>
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>
    </div>
  )
}

