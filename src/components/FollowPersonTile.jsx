import { Button } from "react-bootstrap";

const FollowPersonTile = (props) => {
  return (
    <div className="grouptile">
      <div>
        <img src={props.image} alt="..." />
      </div>
      <div>
        <h3>{props.title}</h3>
        <h4>{props.subtitle.toLocaleString()}</h4>
        <Button variant="outline-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
            </svg>
              <span>Follow</span>
        </Button>
      </div>
    </div>
  );
};

export default FollowPersonTile;
