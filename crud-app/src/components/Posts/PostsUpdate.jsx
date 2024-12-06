import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostsUpdate = () => {
  const [formData, setFormData] = useState({
    title: "",
    about: "",
  });

  const { id } = useParams();

  useEffect(() => {
    fetchPosts();
  }, [id]);

  const fetchPosts = async () => {
    console.log(id, "ID");
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
      const data = await response.json();
      if (data && data.length > 0) {
        setFormData({
          title: data[0].title,
          about: data[0].body,
        });
      } else {
        console.log("No data found");
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log("Form submitted:", formData);
    // Submit logic here
  };

  return (
    <div className="mt-3 space-y-12">
      <div className="row">
        <h2>Edit Posts</h2>
        <hr />
      </div>
      <div className="border-b border-gray-900/10 pb-12">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">About</label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              name="about"
              type="text"
              value={formData.about}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
            <span>
              <label>
                <a
                  href="/posts"
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                >
                  Back to Posts
                </a>
              </label>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostsUpdate;
