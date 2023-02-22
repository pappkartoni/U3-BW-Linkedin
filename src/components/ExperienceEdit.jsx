import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";

const ExperienceEdit = (props) => {
  const [editExperience, setEditExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState(null);

  const changeExperience = async (e) => {
    e.preventDefault();
    try {
      const experienceDetails = {
        role: document.getElementById("role").value,
        company: document.getElementById("company").value,
        startDate: document.getElementById("startdate").value,
        endDate: document.getElementById("enddate").value,
        description: document.getElementById("description").value,
        area: document.getElementById("area").value,
      };

      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/63f33a3d8381fc0013fffad6/experiences/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(experienceDetails),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzM2EzZDgzODFmYzAwMTNmZmZhZDYiLCJpYXQiOjE2NzY4ODQ1NDIsImV4cCI6MTY3ODA5NDE0Mn0.yy7dqsjX4YYSOfQOfYOZsSdFYZqn9oQ_CAzHWsa775s",
          },
        }
      );
      if (response.ok) {
        let responseData = await response.json();
        console.log("responseData", responseData);

        setEditExperience(responseData);
      } else {
        console.log("Error fetching Data!");
      }
    } catch (error) {
      console.log("Error fetching Data!");
    }
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
          <Modal.Title>Edit experience</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>* Indicates required</p>
          <Form onSubmit={changeExperience}>
            <Form.Group>
              <Form.Label>Role* </Form.Label>
              <Form.Control
                type="text"
                id="role"
                required
                value={editExperience.role}
                onChange={(e) =>
                  setEditExperience({ ...editExperience, role: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Company Name*</Form.Label>
              <Form.Control
                type="text"
                id="company"
                required
                value={editExperience.company}
                onChange={(e) =>
                  setEditExperience({
                    ...editExperience,
                    company: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Start Date*</Form.Label>
              <Form.Control
                type="date"
                id="startdate"
                required
                value={editExperience.startDate}
                onChange={(e) =>
                  setEditExperience({
                    ...editExperience,
                    startDate: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                id="enddate"
                value={editExperience.endDate}
                onChange={(e) =>
                  setEditExperience({
                    ...editExperience,
                    endDate: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                id="description"
                value={editExperience.description}
                onChange={(e) =>
                  setEditExperience({
                    ...editExperience,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Area of expertise</Form.Label>
              <Form.Control
                type="text"
                id="area"
                value={editExperience.area}
                onChange={(e) =>
                  setEditExperience({ ...editExperience, area: e.target.value })
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
            onClick={props.handleClose}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ExperienceEdit;
