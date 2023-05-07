import './Footer.scss';
import footer_logo from '../../Img/footer_logo.svg';

export const Footer = () => {
    return(
        <footer className="footer">
        <div className="container">
            <div className="footer__header">
                <img src={footer_logo} alt="Logo"/>
                <form className="footer__search-form">
                    <input type="text"
                        placeholder="Stay in the loop  - sign up with your email"/>
                    <button>Subscribe</button>
                </form>
            </div>

            <div class="footer__footer">
                <nav class="first-box__navigation">
                    <div>
                        <span>Help Menu</span>
                    </div>

                    <ul>
                        <li><a href="https://www.youtube.com/watch?v=9ijKsZOYOg0">About</a></li>
                        <li><a href="https://www.youtube.com/watch?v=9ijKsZOYOg0">Features</a>
                        </li>
                        <li><a href="https://www.youtube.com/watch?v=9ijKsZOYOg0">Works</a></li>
                        <li><a href="https://www.youtube.com/watch?v=9ijKsZOYOg0">Career</a></li>
                        <li><a href="https://www.youtube.com/watch?v=9ijKsZOYOg0">Contact</a>
                        </li>
                        <li><a href="https://www.youtube.com/watch?v=9ijKsZOYOg0">Help &
                                Support</a></li>
                        <li><a href="https://www.youtube.com/watch?v=9ijKsZOYOg0">Privacy
                                Policy</a></li>
                        <li><a href="https://www.youtube.com/watch?v=9ijKsZOYOg0">Terms &
                                Conditions</a></li>
                    </ul>
                </nav>

                <nav className="second-box__navigation">
                    <div><span>Product</span></div>
                    <ul>
                        <li><a href="https://www.youtube.com/watch?v=9ijKsZOYOg0">Essential
                                Landing Page</a></li>
                        <li><a href="https://www.youtube.com/watch?v=9ijKsZOYOg0">Alpha Dashboard
                                Pro</a></li>
                        <li><a href="https://www.youtube.com/watch?v=9ijKsZOYOg0">Karnel Admin
                                Dashboard</a></li>
                        <li><a href="https://www.youtube.com/watch?v=9ijKsZOYOg0">Gray UI Kit</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
    )
}