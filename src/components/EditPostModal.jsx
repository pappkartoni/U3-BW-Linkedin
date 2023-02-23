import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updatePostImage } from "../redux/actions";

const EditPostModal = ({ handleClose, show, postId }) => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const updatePostHandler = () => {
    const formData = new FormData();
    formData.append("post", image);
    dispatch(updatePostImage(postId, formData, handleClose));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create a post</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <input
          type="file"
          onChange={(e) => {
            console.log(e.target.files[0]);
            setImage(e.target.files[0]);
          }}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={updatePostHandler}>
          Update (EDIT HOVER)
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditPostModal;
