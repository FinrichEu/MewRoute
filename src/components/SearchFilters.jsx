import {
  SlMagnifier,
  SlBriefcase,
  SlLocationPin,
  SlArrowDown,
} from "react-icons/sl";

/* Display the search, location, and work schedule fields */
/* Pass the entered values to JobsPage using the provided functions */

export default function SearchFilters({ search, setSearch, location, setlocation, workformat, setWorkformat }) {
  return (
    <div className="search-filters">
      <h2 className="find-your">Find your</h2>
      <h2 className="next-role">next role.</h2>
      <div className="filter-fields">
        <div className="filter-field">
          <SlMagnifier className="filter-icon" />

          <div className="field-content">
            <label htmlFor="job-search">Search</label>
            <input
              className="filter-control"
              id="job-search"
              type="search"
              placeholder="Job title or company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="filter-field format-field">
          <SlBriefcase className="filter-icon" />

          <div className="field-content format-content">
            <label htmlFor="work-format">Work format</label>
            <select
              className="filter-control format-select dropdown-select"
              id="work-format"
              value={workformat}
              onChange={(e) => setWorkformat(e.target.value)}
            >
              <option value="all">All formats</option>
              <option value="remote">Remote</option>
              <option value="not-remote">Not remote</option>
            </select>
          </div>
          <SlArrowDown className="format-arrow" aria-hidden="true" />
        </div>

        <div className="filter-field">
          <SlLocationPin className="filter-icon" />
          <div className="field-content">
            <label htmlFor="location">Location</label>
            <input
              className="filter-control"
              id="location"
              type="text"
              placeholder="City or country..."
              value={location}
              onChange={(e) => setlocation(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
