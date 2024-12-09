

// eslint-disable-next-line react/prop-types
const Pagination = ({ postsPerPage, length }) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className="pagination">
     {paginationNumbers.map((pageNumber) => (
        <button
            key={pageNumber}
            // eslint-disable-next-line no-undef
            className={currentPage === pageNumber? 'active' : ''}
        >
            {pageNumber}
        </button>
    ))}
    </div>
  );
};
export default Pagination;
