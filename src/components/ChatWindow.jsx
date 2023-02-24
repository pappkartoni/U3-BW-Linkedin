import { useState } from "react"
import { Form } from "react-bootstrap"
import { BsSearch } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const ChatWindow = () => {
    const [isEpanded, setIsExpanded] = useState(false)
    const user = useSelector(state => state.getProfile.fetchProfile) // state.profile.profileData

    const toggleExpand = () => {
        setIsExpanded(!isEpanded)
    }

    return (
        <section className="chat">
            <button className="btn-fullwidth" onClick={toggleExpand}>
                <div className="d-flex align-items-center">
                    <div className="img-wrapper">
                        <img src={user?.image} alt="..." style={{width: 32, height: 32}} />
                        <div className="online-indicator"></div>
                    </div>
                    <h4 className="mr-auto">Messaging</h4>
                    <div className="d-flex align-items-center justify-content-center px-2">
                        ...
                    </div>
                    <div className="d-flex align-items-center justify-content-center px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                            <path d="M15 2.53a1.51 1.51 0 01-.44 1L9.15 9 6 10l1-3.12 5.44-5.44A1.5 1.5 0 0115 2.53zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h3V2H5a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V8h-2z"></path>
                        </svg>
                    </div>
                    <div className="d-flex align-items-center justify-content-center px-2">
                        {isEpanded
                        ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                                <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
                            </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                                <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
                            </svg>}
                    </div>
                </div>
            </button>
            {isEpanded && <div className="chat-body text-center">
                <Form>
                    <Form.Control type="search" placeholder="Search messages" />
                    <BsSearch className="search-icon"/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false" className="sort-icon">
                        <path d="M15 2v2H6.72a2 2 0 01-3.44 0H1V2h2.28a2 2 0 013.44 0H15zm-4 4a2 2 0 00-1.72 1H1v2h8.28a2 2 0 003.45 0H15V7h-2.28A2 2 0 0011 6zm-6 5a2 2 0 00-1.72 1H1v2h2.28a2 2 0 003.45 0H15v-2H6.72A2 2 0 005 11z"></path>
                    </svg>
                </Form>
                <div className="chat-padding">
                    <img src="https://static.licdn.com/sc/h/axgduq35g9cjimgrc6383gx61" alt="chat empty" style={{width: 60, height: 60}}/> 
                    <h3>Keep in touch with your network</h3>
                    <h4>Start a conversation with your connections or find new people to grow your network.</h4>
                    <Link to="/">
                        <span>Find new connections</span>
                    </Link>
                </div>
            </div>}
        </section>
    )
}

export default ChatWindow