import { useEffect, useState } from "react";
import PostCard from "./PostCard";

const PostList = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("failed to fetch data");
      }
      setState(res.json());
    };
    getData();
  }, []);
  return (
    <div className="cardList">
      {state.map((post: { title: string; id: number; body: string }) => {
        return <PostCard key={post.id} {...post} />;
      })}
    </div>
  );
};

export default PostList;
