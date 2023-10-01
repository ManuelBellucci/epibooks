const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  return (
    <div className='flex justify-center mt-4'>
      {/* Previous button */}
      <button
        onClick={onPrevPage}
        disabled={currentPage === 1}
        className='flex items-center justify-center px-6 py-6 h-8 mr-3 mb-6 text-xl font-medium text-dark-900 bg-white border border-black rounded-lg hover:bg-gray-100 hover:text-gray-700'
        aria-label='Previous'
      >
        <svg
          className='w-3.5 h-3.5 mr-2'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 14 10'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M13 5H1m0 0 4 4M1 5l4-4'
          />
        </svg>
        Previous
      </button>

      {/* Next button */}
      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className='flex items-center justify-center px-6 py-6 h-8 mr-3 mb-3 text-xl font-medium text-dark-900 bg-white border border-black rounded-lg hover:bg-gray-100 hover:text-gray-700'
        aria-label='Next'
      >
        Next
        <svg
          className='w-3.5 h-3.5 ml-2'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 14 10'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M1 5h12m0 0L9 1m4 4L9 9'
          />
        </svg>
      </button>
    </div>
  )
}

export default Pagination
