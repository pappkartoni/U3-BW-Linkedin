import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import SinglePost from "./SinglePost";

const PostComponent = () => {
  const posts = useSelector((state) => state.posts.postList);

  return (
    <Container>
      {posts.length > 0 && (
        <>
          {posts.map((post) => (
            <SinglePost post={post} />
          ))}
        </>
      )}
    </Container>
  );
};

export default PostComponent;
