import React from 'react'

export default function SearchFilters({ search, setSearch, location, setlocation}) {
  return (
    <div className="filter-fields">
      <div className="filter-field">
        <label htmlFor="job-search">Search</label>
        <input
          id="job-search"
          type="search"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          placeholder="For example, Berlin"
          value={location}
          onChange={(e) => setlocation(e.target.value)}
        />
      </div>
    </div >
  )
}
