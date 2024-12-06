import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts/Posts";
import PostsCreate from "./components/Posts/PostsCreate";
import PostsUpdate from "./components/Posts/PostsUpdate";
import NotFoundPage from "./components/Pages/NotFoundPage";
import InternalServerError from "./components/Pages/InternalServerError";

function App() {
  return (
    <div className="flex justify-center flex-col p-2 m-2">
      <h2 className="text-3xl text-center">This is Posts</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/add" element={<PostsCreate />} />
          <Route path="/posts/id/:id" element={<PostsUpdate />} />
          {/* Error */}
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/500" element={<InternalServerError />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
