import { useDispatch, useSelector } from "react-redux";
import ExperienceTile from "./ExperienceTile";
import MyExperienceModal from "./MyExperienceModal";
import { BsFillPencilFill, BsPlus } from "react-icons/bs";
import { useEffect, useState } from "react";
import ExperienceEdit from "./ExperienceEdit";
import { getAllExperiences, getSingleExperience } from "../redux/actions";

const ExperiencesContainer = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id = null) => {

    if (id) {
      console.log("with id", id)
      dispatch(getSingleExperience(user._id, id))
    } else {
      console.log("without id")
      dispatch({type: "GET_SINGLE_EXPERIENCE", payload: null})
    }
    setShow(true);
  }

  const user = useSelector(state => state.getProfile.fetchProfile)

  const experiences = useSelector(state => state.exp.experiences)  
  /* [
    {
      _id: "5d925e677360c41e0046d1f5", // server generated
      role: "CTO",
      company: "Strive School",
      startDate: "2019-06-16",
      endDate: "2019-06-16", // could be null
      description: "Doing stuff",
      area: "Berlin",
      username: "admin", // server generated
      createdAt: "2019-09-30T19:58:31.019Z", // server generated
      updatedAt: "2019-09-30T19:58:31.019Z", // server generated
      __v: 0, // server generated
      image:
        "https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_100_100/0/1646830188434?e=1684972800&v=beta&t=YUs_d7vC1ildfbWq1pVcQg9coz_7be4zzoPvUKyam4w", // server generated on upload
    },
  ]; */

  useEffect(() => {
    dispatch(getAllExperiences(user._id))
  },[])

  return (
    <section>
      <div className="d-flex align-items-center justify-content-between experience pr-2 ">
        <h2 className="pt-0 px-0 mb-0">Experience</h2>
        <div className="d-flex align-items-center">
          <div className="icon-hover d-flex justify-content-center align-items-center">
            <BsPlus size="38" fill="rgba(0,0,0,0.6)" onClick={() => handleShow(null)} />
          </div>
        </div>
      </div>
      <MyExperienceModal show={show} handleClose={handleClose} userId={user._id}/>
      {experiences.length > 0 &&
        experiences.map((exp) => <ExperienceTile key={exp._id} exp={exp} handleShow={() => (handleShow(exp._id))}/>)}
    </section>
  );
};

export default ExperiencesContainer;
