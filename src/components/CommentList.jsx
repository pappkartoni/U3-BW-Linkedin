import { formatDistanceToNow } from "date-fns"
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions";

const CommentList = (props) => {
    const dispatch = useDispatch()
    const user = useSelector(
        (state) => state.getProfile.fetchProfile
        );
    return (
        <>
        {
            props.comments.length > 0 && props.comments.map(c => {
                return <div key={c._id} className="comment-row d-flex">
                        <div className="comment-profile-img">
                            <img src={c.user?.image} alt="..."/>
                        </div>
                        <div className="comment-body">
                            <div className="d-flex justify-content-between">
                                <h4>{c.user?.name} {c.user?.surname}</h4>
                                <span>
                                    <span className="comment-smaller">{formatDistanceToNow(new Date(c.updatedAt), {addSuffix: true})}</span>
                                    {user._id === c.user?._id && 
                                        <span className="comment-delete" onClick={async () => {
                                            try {
                                                console.log("hi")
                                                const res = await fetch(`${process.env.REACT_APP_BE_URL}/posts/${props.postId}/comments/${c._id}`, {method: "DELETE"})
                                                if(res.ok) {
                                                    dispatch(getAllPosts())
                                                }
                                            } catch (error) {
                                                console.log(error)
                                            }
                                        }}>
                                            <MdDelete size={14} fill="rgba(0,0,0,0.5)" />
                                        </span>}
                                </span>
                            </div>
                            <p>
                                {c.comment}
                            </p>
                        </div>
                </div>
            })
        }
        </>
    )
}


export default CommentList