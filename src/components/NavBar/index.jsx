import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeAlt } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";
export default function NavBar() {
    return (
        <div className="navbar__container">
            <div className="nav__menu">
                <FontAwesomeIcon icon={faHomeAlt} />
                <p>PPA Contracts &gt; View/Edit contract</p>
            </div>
            <div className="nav__client">
                <h3>Client Name</h3>
            </div>
        </div>
    )
}