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
  });

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
