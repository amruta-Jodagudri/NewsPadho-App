import React from 'react';
import { FaBackward, FaForward } from 'react-icons/fa6';
import '../styles.css';

const Pagination = ({ currentPage, onPageChange }) => {
    return (
        <div className="pagination">
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
            <FaBackward/> Previous
        </button>
        <span className='current'>{currentPage}</span>
        <button onClick={() => onPageChange(currentPage + 1)}>
            Next <FaForward/>
        </button>
        </div>
    );
};

export default Pagination;
