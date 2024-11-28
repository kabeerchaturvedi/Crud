import { useEffect, useState } from "react";

const Posts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchPostsData();
  }, []);

  const fetchPostsData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await data.json();
    setData(response);
  };

  return (
    <div className="flex justify-center p-10">
      <table className="border-collapse border border-slate-400">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post, index) => (
            <tr key={index}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
