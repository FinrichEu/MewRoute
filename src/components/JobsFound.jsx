import React from 'react'

export default function JobsFound() {
  return (
    <div className="jobs-block">
      <div className="jobs-header">
        <h2 className="jobs-title">Jobs Found</h2>
        <span className="jobs-count">24 results</span>
      </div>
      <div className="sort-field">
        <label htmlFor="sort-by"></label>
        <select id="sort-by" defaultValue="newest">
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>
    </div>
  )
}

