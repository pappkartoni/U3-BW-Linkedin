import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions";

const CommentPost = (props) => {
    const dispatch = useDispatch()
    const [content, setContent] = useState("")
    const user = useSelector(
        (state) => state.getProfile.fetchProfile
        );

    const addComment = async () => {
        try {
            const res = await fetch(`${process.env.REACT_APP_BE_URL}/posts/${props.postId}/comments`, {
                method: "POST",
                body: JSON.stringify({comment: content, user: user._id}),
                headers: {"Content-Type": "application/json"}
            })
            if (res.ok) {
                setContent("")
                dispatch(getAllPosts())
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="create-comment d-flex align-items-center">
                <div className="comment-profile-img">
                    <img src={user.image} alt="user profile" />
                </div>
                <input className="comment-text-field" placeholder="Add a comment..." value={content} onChange={e => setContent(e.target.value)}/>
            </div>
            {content.length > 0 && 
                <Button variant={"primary"} onClick={addComment} style={{marginTop: 8, marginLeft: 44, fontSize: 12, paddingBlock: 2, paddingInline: 12}}>Post</Button>
            }
        </>
    )
}

export default CommentPost