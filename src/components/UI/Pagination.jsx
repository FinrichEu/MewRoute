import React from 'react'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

/* Display the current page and the navigation buttons */
/* Use the passed function to change the page number in JobsPage */

function Pagination({ currentPage, setCurrentPage, totalPages }) {
    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="pagination">
            <button
                /* “Previous”: You cannot navigate backward on the first page */
                disabled={currentPage === 1}
                type="button"
                onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
            >
                <SlArrowLeft className="pagination-arrow" aria-hidden="true" />
                <span>Previous</span>
            </button>

            <span className="pagination-current" aria-current="page">
                <span className="pagination-page-label">Page </span>
                {currentPage}
            </span>

            <button
                /* “Next”: You cannot navigate forward on the last page */
                disabled={currentPage >= totalPages}
                type="button"
                onClick={() => setCurrentPage((currentPage) => currentPage + 1)}
            >
                <span>Next</span>
                <SlArrowRight className="pagination-arrow" aria-hidden="true" />
            </button>
        </div>
    )
}

export default Pagination

