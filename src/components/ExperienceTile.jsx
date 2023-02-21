import { format, parseISO } from "date-fns";

const ExperienceTile = (props) => {
  return (
    <div className="experience d-flex w-100">
      <div className="w-25">
        <img src={props.exp.image} alt={props.exp.company} />
      </div>
      <div className="d-flex flex-column  w-75">
        <h3>{props.exp.role}</h3>
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
