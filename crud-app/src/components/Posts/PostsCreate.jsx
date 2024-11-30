import { useState } from "react";

const PostsCreate = () => {
  const [formData, setFormData] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts", "POST");
      console.log(data);
    } catch (error) {
      console.log(error);
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
                <input type="text" name="title" placeholder="Enter your Title here" />
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                Body
              </label>
              <div className="mt-2">
                <textarea
                  id="body"
                  name="body"
                  rows="3"
                  placeholder="Enter your body data here"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                ></textarea>
              </div>
              <button type="submit" className="btn border-t-neutral-700" disabled={isSubmitting}>
                {isSubmitting ? "Submitting" : "Create"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostsCreate;
