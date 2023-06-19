import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import "./sidenav.css";

export default function SideNav() {
    return (
        <div className="sidenav__container">
            <nav>
                <ul>
                    <li><a href="/">Dashboard</a></li>
                    <li><a href="/">PPA Contract</a></li>
                    <li><a href="/">Upload Data</a></li>
                    <li><a href="/">FAQs</a></li>
                </ul>
            </nav>
            <div className="contact__support">
                <FontAwesomeIcon className="icon__support" icon={faCommentAlt} />
                <p className='contact_text'>Support</p>
            </div>
        </div>
    )
}