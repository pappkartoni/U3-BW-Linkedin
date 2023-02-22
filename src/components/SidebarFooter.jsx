import { Link } from "react-router-dom"
import Logo from "../assets/img/logo.svg"

const SideBarFooter = () => {
    return (
        <footer className="side-footer stick-top">
            <div className="d-flex">
                <Link to="/">
                    <span>About</span>
                </Link>
                <Link to="/">
                    <span>Accessibility</span>
                </Link>
                <Link to="/">
                    <span>Help Center</span>
                </Link>
                <Link to="/">
                    <span>Impressum</span>
                </Link>
                <Link to="/">
                    <span>Privacy & Terms</span>
                </Link>
                <Link to="/">
                    <span>Ad Choices</span>
                </Link>
                <Link to="/">
                    <span>Advertising</span>
                </Link>
                <Link to="/">
                    <span>Business Services</span>
                </Link>
                <Link to="/">
                    <span>Get the LinkedIn app</span>
                </Link>
                <Link to="/">
                    <span>More</span>
                </Link>
            </div>
            <div className="copyright">
                <img src={Logo} alt="logo" className="logo" style={{height: 14}}/>
                LinkedIn Corporation © 2023
            </div>
        </footer>
    )
}

export default SideBarFooter