import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeBio } from "../redux/actions";

const ChangeBioForm = ({
  handleShowBioForm,
  handleCloseBioForm,
  showBioForm,
}) => {
  const [bio, setBio] = useState("");

  const dispatch = useDispatch();

  const changeBioHandler = (e) => {
    e.preventDefault();
    dispatch(changeBio(bio));
  };

  return (
    <Modal show={showBioForm} onHide={handleCloseBioForm}>
      <Modal.Header closeButton>
        <Modal.Title>Add summary</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={changeBioHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Enter Summary</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Summary"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </Form.Group>
          <Button onClick={handleCloseBioForm} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ChangeBioForm;
