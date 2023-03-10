import { Button } from "react-bootstrap";

const GroupPersonTile = (props) => {
  return (
    <div className="grouptile">
      <div>
        <img src={props.image} alt="..." />
      </div>
      <div>
        <h3>{props.title}</h3>
        <h4>{props.subtitle.toLocaleString()} {!props.forperson && "members"}</h4>
        <Button variant="outline-secondary">
          {props.forperson ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="currentColor"
                className="mercado-match"
                width="16"
                height="16"
                focusable="false"
              >
                <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
              </svg>
              <span>Connect</span>
            </>
          ) : (
            <span>Join</span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default GroupPersonTile;
