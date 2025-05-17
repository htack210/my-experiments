import PostsList from "./components/PostsList";
import classes from "./App.module.css";

const { centered } = classes

function App() {
  return (
    <main>
      <h1 className={centered}>My First-ish React app</h1>
      <PostsList />
    </main>
  );
}

export default App;
