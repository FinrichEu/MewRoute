import React from 'react'
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

function Pagination({ links, page, setPage }) {
    return (
        <div className="pagination">
            <button
                disabled={!links?.prev}
                type="button"
                onClick={() => setPage(currentPage => Math.max(1, currentPage - 1))}
            >
                <SlArrowLeft className="pagination-arrow" aria-hidden="true" />
                <span>Previous</span>
            </button>

            <span className="pagination-current" aria-current="page">
                <span className="pagination-page-label">Page </span>
                {page}
            </span>

            <button
                disabled={!links?.next}
                type="button"
                onClick={() => setPage(currentPage => currentPage + 1)}
            >
                <span>Next</span>
                <SlArrowRight className="pagination-arrow" aria-hidden="true" />
            </button>
        </div>
    )
}

export default Pagination

