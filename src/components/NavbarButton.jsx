import { Link } from "react-router-dom"

const NavbarButton = (props) => {
    return (
        <li className="navbutton">
            <Link to="/" className="d-flex flex-column align-items-center justify-content-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d={props.d}></path>
                    </svg>
                </div>
                <span>
                    {props.text}
                </span>
            </Link>
        </li>
    )
}

export default NavbarButton