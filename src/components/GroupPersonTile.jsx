import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchOwnProfile } from "../redux/actions";

const GroupPersonTile = (props) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.getProfile.fetchProfile);
  const sendFriendRequest = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BE_URL}/users/${user._id}/friendRequest/${props.id}`, {method: "PUT"})
      if (res.ok) {
        dispatch(fetchOwnProfile())
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className="grouptile">
      <div>
        <img src={props.image} alt="..." />
      </div>
      <div>
        <h3>{props.title}</h3>
        <h4>{props.subtitle.toLocaleString()} {!props.forperson && "members"}</h4>
          {props.forperson ? (
            !user.friends.includes(props.id) ?
            <Button variant="outline-secondary" onClick={sendFriendRequest} >
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
              {user.requestSend.includes(props.id) ? <span>Cancel</span> : <span>Connect</span>}
            </Button>
            : <Button variant="outline-primary">Unfriend</Button>
          ) : (
          <Button variant="outline-secondary">
            <span>Join</span>
          </Button>
          )}
      </div>
    </div>
  );
};

export default GroupPersonTile;
