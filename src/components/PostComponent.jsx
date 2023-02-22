import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions";
import SinglePost from "./SinglePost";

const PostComponent = () => {
  const posts = useSelector((state) => state.posts.postList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      {posts.length > 0 && (
        <>
          {posts
            .slice(0, 20)
            .reverse()
            .map((post) => (
              <SinglePost key={post._id} post={post} />
            ))}
        </>
      )}
    </Container>
  );
};

export default PostComponent;
