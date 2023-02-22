import { useDispatch, useSelector } from "react-redux";
import ExperienceTile from "./ExperienceTile";
import MyExperienceModal from "./MyExperienceModal";
import { BsPlus } from "react-icons/bs";
import { useEffect, useState } from "react";
import { getAllExperiences, getSingleExperience } from "../redux/actions";

const ExperiencesContainer = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const user = useSelector((state) => state.getProfile.fetchProfile);
  const experiences = useSelector((state) => state.exp.experiences);

  const handleShow = (id = null) => {
    if (id) {
      console.log("with id", id);
      dispatch(getSingleExperience(user?._id, id));
    } else {
      console.log("without id");
      dispatch({ type: "GET_SINGLE_EXPERIENCE", payload: null });
    }
    setShow(true);
  };

  useEffect(() => {
    dispatch(getAllExperiences(user._id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <div className="d-flex align-items-center justify-content-between experience pr-3 ">
        <h2 className="pt-0 px-0 mb-0">Experience</h2>
        <div className="d-flex align-items-center">
          <div className="icon-hover d-flex justify-content-center align-items-center">
            <BsPlus
              size="38"
              fill="rgba(0,0,0,0.6)"
              onClick={() => handleShow(null)}
            />
          </div>
        </div>
      </div>
      <MyExperienceModal
        show={show}
        handleClose={handleClose}
        userId={user?._id}
      />
      {experiences.length > 0 &&
        experiences.map((exp) => (
          <ExperienceTile
            key={exp._id}
            exp={exp}
            handleShow={() => handleShow(exp._id)}
          />
        ))}
    </section>
  );
};

export default ExperiencesContainer;
