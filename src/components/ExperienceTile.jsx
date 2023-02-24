import { BsFillPencilFill, BsXLg } from "react-icons/bs";
import { format, parseISO } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { deleteExperience } from "../redux/actions";

const ExperienceTile = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.getProfile.fetchProfile);

  const handleDelete = () => {
    dispatch(deleteExperience(user._id, props.exp._id));
  };
  return (
    <div className="experience d-flex align-items-center pr-3 border-light-bottom">
      <div style={{ maxWidth: "12%", width: "100%", paddingInlineEnd: "15px" }}>
        <img src={props.exp.image} alt={props.exp.company} />
      </div>
      <div
        className="d-flex flex-column"
        style={{ maxWidth: "88%", width: "100%" }}
      >
        <h3 className="d-flex justify-content-between align-items-center">
          {props.exp.role}{" "}
          <div className="d-flex">
            <span className="icon-hover d-flex justify-content-center align-items-center ">
              <BsFillPencilFill
                fill="rgba(0,0,0,0.6)"
                onClick={props.handleShow}
              />
            </span>
            <span className="icon-hover d-flex justify-content-center align-items-center ">
              <BsXLg fill="rgba(255,0,0,0.6)" onClick={handleDelete} />
            </span>
          </div>
        </h3>
        <h4>{props.exp.company}</h4>
        <span>
          {props.exp.startDate &&
            format(parseISO(props.exp.startDate), "MMM yyyy")}{" "}
          {props.exp.endDate &&
            format(parseISO(props.exp.endDate), " - MMM yyyy")}
        </span>
        <span>{props.exp.area}</span>
        <p>{props.exp.description}</p>
      </div>
    </div>
  );
};

export default ExperienceTile;
