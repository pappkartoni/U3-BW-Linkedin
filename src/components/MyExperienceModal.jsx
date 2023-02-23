import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createExperience, getAllExperiences, updateExperience } from "../redux/actions";
import { format } from "date-fns/";
import { parseISO } from "date-fns";

const MyExperienceModal = (props) => {
  const dispatch = useDispatch()

  const user = useSelector(state => state.getProfile.fetchProfile)
  const expToEdit = useSelector(state => state.exp.experienceToEdit)

  const [addExperience, setAddExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const [image, setImage] = useState(null)

  useEffect(() => {
    console.log("update exptoedit", expToEdit)
    if (expToEdit !== null) {
      setAddExperience(expToEdit)
    } else {
      setAddExperience({
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        area: "",
      })
    }
  }, [expToEdit]);

  const submitExperience = async () => {

    if (expToEdit) {
      dispatch(updateExperience(user._id, expToEdit._id, addExperience))


      if (image) {
        const formData = new FormData();
        formData.append("experience", image);
        try {
          let res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${user._id}/experiences/${expToEdit._id}/picture`, {
              method: "POST",
              body: formData,
              headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzM2EzZDgzODFmYzAwMTNmZmZhZDYiLCJpYXQiOjE2NzY4ODQ1NDIsImV4cCI6MTY3ODA5NDE0Mn0.yy7dqsjX4YYSOfQOfYOZsSdFYZqn9oQ_CAzHWsa775s",
              },
            }
          );
          if (res.ok) {
            console.log("Image Uploaded Successfully");
          }
        } catch (error) {
          console.log(error);
        }
      }

    } else {
      dispatch(createExperience(user._id, addExperience))
    }

    dispatch(getAllExperiences(user._id))
    props.handleClose()
  };

  return (
        <Modal
          size="lg"
          show={props.show}
          onHide={props.handleClose}
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{expToEdit ? "Edit experience" : "Add experience"}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={submitExperience}>
              <Form.Group>
                <Form.Label>Role* </Form.Label>
                <Form.Control
                  type="text"
                  value={addExperience?.role}
                  onChange={(e) =>
                    setAddExperience({ ...addExperience, role: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Company*</Form.Label>
                <Form.Control
                  type="text"
                  value={addExperience?.company}
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
                  value={addExperience.startDate !== "" ? format(parseISO(addExperience.startDate), "yyyy-MM-dd") : ""}
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
                  value={addExperience.endDate !== "" ? format(parseISO(addExperience.endDate), "yyyy-MM-dd") : ""}
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
                  value={addExperience?.description}
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
                  value={addExperience?.area}
                  onChange={(e) =>
                    setAddExperience({ ...addExperience, area: e.target.value })
                  }
                />
              </Form.Group>

              {expToEdit && <Form.Group>
                <Form.Label>Company Logo</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                  console.log(e);
                  setImage(e.target.files[0]);
                }}
              />
              </Form.Group>}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              type="submit"
              className="py-2 ml-auto"
              onClick={() => {
                submitExperience();
              }}
            >
              {expToEdit ? "Save" : "Create"}
            </Button>
          </Modal.Footer>
        </Modal>
  );
};
export default MyExperienceModal;