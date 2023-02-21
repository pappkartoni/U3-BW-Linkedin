import { BsFillPencilFill, BsPlus } from "react-icons/bs"

const ExperienceTile = (props) => {
    return (
        <div className="experience d-flex">
            <div style={{maxWidth: 80}}>
                <img src={props.exp.image} alt={props.exp.company} />
            </div>
            <div className="d-flex flex-column">
                <h3>{props.exp.role} <BsFillPencilFill fill="rgba(0,0,0,0.6)" onClick={props.handleShow} /></h3>
                <h4>{props.exp.company}</h4>
                <span>{props.exp.startDate} - {props.exp.endDate !== undefined ? props.exp.endDate : "Now"}</span>
                <span>{props.exp.area}</span>
                <p>{props.exp.description}</p>
            </div>
        </div>
    )

}

export default ExperienceTile