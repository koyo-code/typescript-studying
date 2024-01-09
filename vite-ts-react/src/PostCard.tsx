const PostCard = ({ title, body }: { title: string; body: string }) => {
  return (
    <div className="postCard">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
