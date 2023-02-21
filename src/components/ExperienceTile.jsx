const ExperienceTile = (props) => {
    return (
        <div className="experience d-flex">
            <div>
                <img src={props.exp.image} alt={props.exp.company} />
            </div>
            <div className="d-flex flex-column">
                <h3>{props.exp.role}</h3>
                <h4>{props.exp.company}</h4>
                <span>{props.exp.startDate} - {props.exp.endDate}</span>
                <span>{props.exp.area}</span>
                <p>{props.exp.description}</p>
            </div>
        </div>
    )

}

export default ExperienceTile