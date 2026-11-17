import { LuListFilter } from "react-icons/lu";

/* Display the number of job openings that match the filters */
/* Pass the selected sort order to JobsPage */

export default function JobsFound({ count, sortBy, setSortBy }) {
  return (
    <div className="jobs-block">
      <div className="jobs-header">
        <h2 className="jobs-title">Open positions</h2>
        <span className="jobs-count">{count} results</span>
      </div>
      <div className="sort-field">
        <LuListFilter className="sort-icon" aria-hidden="true" />

        <select
          className="dropdown-select"
          id="sort-by"
          aria-label="Sort jobs"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Sort by</option>
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>

      </div>
    </div>
  )
}

