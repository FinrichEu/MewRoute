import React from 'react'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

function Pagination({ currentPage, setCurrentPage, totalPages }) {
    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="pagination">
            <button
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

