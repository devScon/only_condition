import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import "./header.css";
export default function Header() {
    return (
        <>
            <div className="header__container">
                <div className="ppa__brand">
                    <img className="ppa__logo__img" src={process.env.PUBLIC_URL + '/ey_logo.png'} alt="ppa__logo" />
                    <p className="ppa__brand">EY Powerchain</p>
                </div>
                <div className="user__info">
                    <div className='user__notificaiton'>
                        <FontAwesomeIcon icon={faBell} />
                        <div className='user__notify'></div>
                    </div>
                    
                    <div className='user__avatar'><p>AB</p></div>
                </div>
            </div>
        
        </>
    )
}