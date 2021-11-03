import { Link } from "react-router-dom";
import { DesktopNavContainer } from "./DesktopNavComponents";

export default function DesktopNav() {
    return (
        <DesktopNavContainer>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/portfolio">Projects</Link></li>
                    <li><Link to="/vlog">Vlog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </DesktopNavContainer>
    )
}