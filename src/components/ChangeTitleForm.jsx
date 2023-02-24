import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeTitle } from "../redux/actions";

const ChangeTitleForm = ({
  handleShowTitleForm,
  handleCloseTitleForm,
  showTitleForm,
}) => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const changeTitleHandler = (e) => {
    e.preventDefault();
    dispatch(changeTitle(title));
  };

  return (
    <Modal show={showTitleForm} onHide={handleCloseTitleForm}>
      <Modal.Header closeButton>
        <Modal.Title>Where do you currently work?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={changeTitleHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Enter Job Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Job Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Form.Group>
          <Button
            onClick={handleCloseTitleForm}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default ChangeTitleForm;
