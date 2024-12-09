// eslint-disable-next-line react/prop-types
const Pagination = ({ length, postsPerPage, handlePagination, currentPage }) => {
  const totalPages = Math.ceil(length / postsPerPage);

  return (
    <div className="mt-4 flex justify-center space-x-2">
      {/* Previous Button */}
      <button
        className="rounded-md bg-gray-300 px-3 py-2 text-sm"
        onClick={() => handlePagination(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`px-3 py-2 text-sm ${
            currentPage === index + 1
              ? "bg-indigo-600 text-white"
              : "bg-gray-300 text-black"
          } rounded-md`}
          onClick={() => handlePagination(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        className="rounded-md bg-gray-300 px-3 py-2 text-sm"
        onClick={() => handlePagination(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
