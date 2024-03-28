import "./pagination.css";

function Pagination({ totalPosts, postsPerPage, setCurrenPage, currentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination-container">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrenPage(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
