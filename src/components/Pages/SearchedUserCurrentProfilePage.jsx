import { Col, Row } from "react-bootstrap";
import PostFeedLeftRecent from "../PostFeedLeftRecent";
import SideBarFooter from "../SidebarFooter";
import Sidebar from "../Sidebar";
import SearchResultProfile from "../SearchResultProfile";
import SearchedUserPost from "../SearchedUserPost";

const SearchedUserCurrentProfilePage = () => {
  return (
    <Row>
      <Col xs={12} sm={3} md={3} lg={3}>
        <PostFeedLeftRecent />
      </Col>
      <Col xs={12} sm={6} md={6} lg={6} className="px-0">
        <SearchResultProfile />
        <SearchedUserPost />
      </Col>
      <Col xs={12} sm={3} className="d-xs-none " md={3} lg={3}>
        <Sidebar />
        <SideBarFooter />
      </Col>
    </Row>
  );
};

export default SearchedUserCurrentProfilePage;
