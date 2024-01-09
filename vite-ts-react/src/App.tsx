import PostList from "./PostList";

const App = () => {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <PostList />
    </div>
  );
};

export default App;
