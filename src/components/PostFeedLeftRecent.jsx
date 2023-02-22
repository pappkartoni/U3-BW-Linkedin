import { Card, ListGroup } from "react-bootstrap";
import { HiHashtag } from "react-icons/hi";

const PostFeedLeftRecent = () => {
  return (
    <section className="stick-top">
      <Card>
        <Card.Body className="small-text font-weight-600 pb-0 px-0 pt-2">
          <span className="ml-3 text-dark">Recents</span>
          <ListGroup variant="flush" className="mb-3">
            <ListGroup.Item className="hover-block  py-1">
              {" "}
              <HiHashtag />
              <span className="ml-1">React-Native</span>
            </ListGroup.Item>
            <ListGroup.Item className="hover-block  py-1">
              {" "}
              <HiHashtag />
              <span className="ml-1">Material UI</span>
            </ListGroup.Item>
            <ListGroup.Item className="hover-block  py-1">
              {" "}
              <HiHashtag />
              <span className="ml-1">JavaScript</span>
            </ListGroup.Item>
          </ListGroup>

          <a href="#group" className="links-blue ml-3 d-block mb-2">
            Group
          </a>
          <a href="#group" className="links-blue ml-3 d-block mb-2">
            Events
          </a>
          <span href="#group" className="links-blue ml-3 mb-2">
            Followed hashtags
          </span>
          <ListGroup variant="flush" className="mb-3">
            <ListGroup.Item className="hover-block  py-1">
              {" "}
              <HiHashtag />
              <span className="ml-1">React-Native</span>
            </ListGroup.Item>
            <ListGroup.Item className="hover-block  py-1">
              {" "}
              <HiHashtag />
              <span className="ml-1">Material UI</span>
            </ListGroup.Item>
            <ListGroup.Item className="hover-block  py-1">
              {" "}
              <HiHashtag />
              <span className="ml-1">JavaScript</span>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </section>
  );
};
export default PostFeedLeftRecent;
