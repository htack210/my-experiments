import PostsList from "./components/PostsList";
import classes from "./App.module.css";
function App() {
  return (
    <main>
      <h1 className={classes.centered}>My First-ish React app</h1>
      <PostsList />
    </main>
  );
}

export default App;
