import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPostsData();
  }, []);

  const fetchPostsData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(data, "Data");
    const response = await data.json();
    setData(response);
  };

  const deletePosts = async (post) => {
    console.log(post);
    try {
      const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${post}`, {
        method: "DELETE",
      });
      if (data) {
        alert("Data Deleted");
      }
    } catch (error) {
      console.log(error);
    }
    fetchPostsData();
  };

  return (
    <div>
      <div className="mb-4">
        <Link
          to="/posts/add"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add New Posts
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
          {data.map((post, index) => (
            <tr key={index}>
              <td className="border border-slate-300 px-4 py-2">{post.id}</td>
              <td className="border border-slate-300 px-4 py-2">{post.title}</td>
              <td className="border border-slate-300 px-4 py-2 truncate max-w-xs overflow-hidden" title={post.body}>
                {post.body}
              </td>
              <td className="border border-slate-300 px-4 py-2">
                <div className="flex space-x-2">
                  <Link
                    className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    to={`/posts?id=${post.id}`}
                  >
                    Edit{" "}
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
    </div>
  );
};

export default Posts;
