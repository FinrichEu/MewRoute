import React from 'react'

export default function SearchFilters() {
  return (
    <div className="filter-fields">
      <div className="filter-field">
        <label htmlFor="job-search">Search</label>
        <input id="job-search" type="search" />
      </div>

      <div className="filter-field">
        <label htmlFor="work-format">Work format</label>
        <select id="work-format" defaultValue="remote">
          <option value="all">All formats</option>
          <option value="remote">Remote</option>
          <option value="hybrid">Hybrid</option>
          <option value="office">Office</option>
        </select>
      </div>

      <div className="filter-field">
        <label htmlFor="visa-sponsorship">Visa sponsorship</label>
        <select id="visa-sponsorship" defaultValue="available">
          <option value="all">Doesn't matter</option>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
      </div>
    </div>
  )
}
