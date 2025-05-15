import Post from "./components/Post";

function App() {
  return (
    <main>
      <h1>My first React app</h1>
      <Post name="Glenn" body="ReactJS has a lot of moving parts."/>
      <Post name="Jim" body="Glenn's too old to learn this stuff."/>
      <Post name="Anne" body="Agree. He should have invested at a muuch younger age. Then he wouldn't still be working."/>
      <Post name="anonymous" body="What a LOSER! HAHAHAHA!"/>
    </main>
  );
}

export default App;
