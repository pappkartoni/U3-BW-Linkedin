import { BsFillPencilFill, BsPlus } from "react-icons/bs";
import { format, parseISO } from "date-fns";

const ExperienceTile = (props) => {
  return (
    <div className="experience d-flex pr-3">
      <div style={{ maxWidth: "20%", width: "100%" }}>
        <img src={props.exp.image} alt={props.exp.company} />
      </div>
      <div
        className="d-flex flex-column"
        style={{ maxWidth: "80%", width: "100%" }}
      >
        <h3 className="d-flex justify-content-between align-items-center">
          {props.exp.role}{" "}
          <span className="icon-hover d-flex justify-content-center align-items-center ">
            <BsFillPencilFill
              size={18}
              fill="rgba(0,0,0,0.6)"
              onClick={props.handleShow}
            />
          </span>
        </h3>
        <h4>{props.exp.company}</h4>
        <span>
          {props.exp.startDate &&
            format(parseISO(props.exp.startDate), "MMMM yyyy")}{" "}
          {props.exp.endDate &&
            format(parseISO(props.exp.endDate), " - MMMM yyyy")}
        </span>
        <span>{props.exp.area}</span>
        <p>{props.exp.description}</p>
      </div>
    </div>
  );
};

export default ExperienceTile;
