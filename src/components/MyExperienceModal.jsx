import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const MyExperienceModal = (props) => {
  const [addExperience, setAddExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  useEffect(() => {
    // HERE DISPATCH FETCH EXPERIENCES
  }, []);

  const submitExperience = async (e) => {
    e.preventDefault();
    try {
      // HERE POST EXPERIENCE
    } catch (error) {
      console.log("Error!");
    }
  };

  //   const deleteExperience = async () => {
  //     try {
  //       // HERE DELETE METHOD EXPERIENCE
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  return (
    <>
      <>
        <Modal
          size="lg"
          show={props.show}
          onHide={props.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add experience</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={submitExperience}>
              <Form.Group>
                <Form.Label>Role* </Form.Label>
                <Form.Control
                  type="text"
                  value={addExperience.role}
                  onChange={(e) =>
                    setAddExperience({ ...addExperience, role: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Company*</Form.Label>
                <Form.Control
                  type="text"
                  value={addExperience.company}
                  onChange={(e) =>
                    setAddExperience({
                      ...addExperience,
                      company: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Start Date*</Form.Label>
                <Form.Control
                  type="date"
                  value={addExperience.startDate}
                  onChange={(e) =>
                    setAddExperience({
                      ...addExperience,
                      startDate: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  value={addExperience.endDate}
                  onChange={(e) =>
                    setAddExperience({
                      ...addExperience,
                      endDate: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Description*</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="text"
                  value={addExperience.description}
                  onChange={(e) =>
                    setAddExperience({
                      ...addExperience,
                      description: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Area*</Form.Label>
                <Form.Control
                  type="text"
                  value={addExperience.area}
                  onChange={(e) =>
                    setAddExperience({ ...addExperience, area: e.target.value })
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              type="submit"
              className="py-2 ml-auto"
              onClick={() => {
                // props.handleClose();
                submitExperience();
                // HERE DISPATCH FETCH EXPERIENCES
              }}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
};
export default MyExperienceModal;
