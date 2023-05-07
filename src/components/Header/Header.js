import { useState } from 'react'
import './Header.scss';
import './Burger.scss';
import '../../Scss/Container.scss'
import Logo from '../../Img/Logo.svg'
const Header = ({ onToggleBody }) => {

    
    const [burgerState, setburgerState] = useState(false);

    function handleClick() {
        setburgerState(burgerState => !burgerState)
        onToggleBody(!burgerState);
    }

    let toogleOverlay = burgerState ? 'overlay_active' : null;
    let toogleBagroundHamburger = burgerState ? 'baground-hamburger_active' : null;
    let toogleHeader = burgerState ? 'header_active' : null;
    let toogleActivateHamburger = burgerState ? 'activate_hamburger_active' : null;
    return (
        
        <div className="container">
            <div className={`baground-hamburger ${toogleBagroundHamburger}`}>
                <button onClick={handleClick} className={`hamburger `}>
                    <div className={`activate_hamburger ${toogleActivateHamburger}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>
            <div className={`overlay ${toogleOverlay}`}>
                <div className={`header ${toogleHeader}`}>
                    <div className="header_logo">
                        <img src={Logo} alt="fsd" />
                        <span>nocode</span>
                    </div>
                    <div className="header_content header_item">
                        <nav className="header_nav">
                            <ul className="header_nav-list">
                                <li><a href="https://chat.openai.com/">Course topics</a></li>
                                <li><a href="https://chat.openai.com/">What students say</a></li>
                            </ul>
                        </nav>
                        <div className="header_registration">
                            <a href="https://chat.openai.com/">Sign in</a>
                            <button>Get started</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export { Header };