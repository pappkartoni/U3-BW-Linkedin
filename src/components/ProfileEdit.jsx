import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";
import { updateOwnProfile } from "../redux/actions";

const ProfileEdit = (props) => {
  const user = useSelector((state) => state.getProfile.fetchProfile);
  const [content, setContent] = useState({
    name: "",
    surname: "",
    title: "",
    area: "",
    bio: "",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    setContent(props.profileDetails);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.profileData]);

  const handleUpdateProfile = () => {
    // console.log("updatedProfileContent", content);
    dispatch(updateOwnProfile(user._id, content));
  };

  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>* Indicates required</p>
          <Form>
            <Form.Group>
              <Form.Label>First name*</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name"
                required
                value={content.name}
                onChange={(e) => {
                  setContent({ ...content, name: e.target.value });
                }}
                className="mb-3"
                id="first-name"
              />
              <Form.Label>Last name*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last name"
                required
                value={content.surname}
                onChange={(e) => {
                  setContent({ ...content, surname: e.target.value });
                }}
                className="mb-3"
                id="last-name"
              />
              <Form.Label>Title*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your headline"
                required
                value={content.title}
                onChange={(e) => {
                  setContent({ ...content, title: e.target.value });
                }}
                className="mb-3"
                id="title"
              />
              <Form.Label>Location(City,State,Country)*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your headline"
                // required
                value={content.area}
                onChange={(e) => {
                  setContent({ ...content, area: e.target.value });
                }}
                className="mb-3"
                id="area"
              />
              <Form.Label>Bio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your headline"
                value={content.bio}
                onChange={(e) => {
                  setContent({ ...content, bio: e.target.value });
                }}
                className="mb-3"
                id="bio"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
            variant="primary"
            className="py-2"
            onClick={() => {
              props.handleClose();
              handleUpdateProfile();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ProfileEdit;
