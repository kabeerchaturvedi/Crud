import "./App.css";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="flex justify-center flex-col p-2 m-2">
      <h2 className="text-3xl text-center">This is Posts</h2>
      <Posts />
    </div>
  );
}

export default App;
