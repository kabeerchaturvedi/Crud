import { useState } from "react";

const PostsCreate = () => {
  const [formData, setFormData] = useState({
    title: null,
    about: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const requestBody = { title: formData.title, about: formData.about };
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="mt-3 space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="title" className="text-base/7 font-semibold text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <input type="text" name="title" placeholder="Enter your Title here" onChange={handleChange} />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                Body
              </label>
              <div className="mt-2">
                <textarea
                  id="body"
                  name="about"
                  rows="3"
                  placeholder="Enter your body data here"
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                ></textarea>
              </div>
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting" : "Create"}
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostsCreate;
