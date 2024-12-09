/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pages/Pagination/Pagination";

const Posts = () => {
  const [data, setData] = useState([]); // Holds all data
  const [currentPage, setCurrentPage] = useState(1); // Tracks current page
  const [postsPerPage] = useState(10); // Number of posts per page

  useEffect(() => {
    fetchPostsData();
  }, []);

  const fetchPostsData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await response.json();
      setData(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const deletePosts = async (postId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        alert("Post Deleted");
        fetchPostsData();
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  // Calculate paginated data
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="mb-4">
        <Link
          to="/posts/add"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add New Post
        </Link>
      </div>
      <table className="border-collapse border border-slate-400 w-full text-left">
        <thead>
          <tr>
            <th className="border border-slate-300 px-4 py-2">ID</th>
            <th className="border border-slate-300 px-4 py-2">Title</th>
            <th className="border border-slate-300 px-4 py-2">Body</th>
            <th className="border border-slate-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post) => (
            <tr key={post.id}>
              <td className="border border-slate-300 px-4 py-2">{post.id}</td>
              <td className="border border-slate-300 px-4 py-2">{post.title}</td>
              <td
                className="border border-slate-300 px-4 py-2 truncate max-w-xs overflow-hidden"
                title={post.body}
              >
                {post.body}
              </td>
              <td className="border border-slate-300 px-4 py-2">
                <div className="flex space-x-2">
                  <Link
                    className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    to={`/posts/${post.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    onClick={() => deletePosts(post.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <Pagination
        length={data.length}
        postsPerPage={postsPerPage}
        handlePagination={handlePagination}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Posts;
