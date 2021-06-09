import "./topbar.css"
import {Person, Mail, LinkedIn, ListAlt, GitHub} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                <h1>Patrick Ly</h1>
                    <div className="itemContainer">
                    <Person className="icon links"/>
                    <a href="tel:408-398-8404"><span>+1 408 398 8404</span></a>
                    <Mail className="icon links"/>
                    <a href = "mailto: patrickly72@gmail.com"><span>patrickly72@gmail.com</span></a>
                    <LinkedIn className="icon links"/><a href="https://www.linkedin.com/in/patrick-ly-aa280717a/" rel="noreferrer" target="_blank"><span>LinkedIn</span></a>
                    <ListAlt className="icon links"/>
                    <a href = "https://patrickvly.github.io/resume.pdf" rel="noreferrer" target="_blank"><span>Resume</span></a>
                    <GitHub className="icon links"/>
                    <a href = "https://www.github.com/patrickvly" rel="noreferrer" target="_blank"><span>GitHub</span></a>
                    </div>
                
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}


