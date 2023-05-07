import './Questions-cards.scss';
import '../../Scss/Container.scss';
import  LogoQuestionsCards  from '../../Img/Logo-questions-cards.svg'
export const QuestionsCards = () => {
    return (
        <div className="container">
            <div className="questions-cards">
            <div className="questions-cards__headline">
                <h2 className="questions-cards__h2">What you'll learn</h2>
                <h3 className="questions-cards__h3">Create beautiful webflow sites with flowbase. Clone for free and get started building a site today.</h3>
            </div>
            <div className="questions-cards__items">
                <div className="questions-cards__item">
                    <img src={LogoQuestionsCards} alt="Pretty Logo"/>
                    <div className="questions-cards__item-text">
                        <h4 className="questions-cards__item-headline">Analyzing User Data</h4>
                        <p className="questions-cards__item-description">Who are you developing for? How will they use your design? Building user personas can answer these.</p>
                    </div>
                    <div className="questions-cards__item-services">
                        <p className="questions-cards__item-description">6 videos</p>
                        <div className="questions-cards__item-stic"></div>
                        <p className="questions-cards__item-description">4.5 hours</p>
                    </div>
                </div>
            </div>
            <div className="questions-cards__items">
                <div className="questions-cards__item">
                    <img src={LogoQuestionsCards} alt="Pretty Logo"/>
                    <div className="questions-cards__item-text">
                        <h4 className="questions-cards__item-headline">User Persona</h4>
                        <p className="questions-cards__item-description">Who are you developing for? How will they use your design? Building user personas can answer these.</p>
                    </div>
                    <div className="questions-cards__item-services">
                        <p className="questions-cards__item-description">6 videos</p>
                        <div className="questions-cards__item-stic"></div>
                        <p className="questions-cards__item-description">4.5 hours</p>
                    </div>
                </div>
            </div>
            <div className="questions-cards__items">
                <div className="questions-cards__item">
                    <img src={LogoQuestionsCards} alt="Pretty Logo"/>
                    <div className="questions-cards__item-text">
                        <h4 className="questions-cards__item-headline">Prototyping</h4>
                        <p className="questions-cards__item-description">Who are you developing for? How will they use your design? Building user personas can answer these.</p>
                    </div>
                    <div className="questions-cards__item-services">
                        <p className="questions-cards__item-description">6 videos</p>
                        <div className="questions-cards__item-stic"></div>
                        <p className="questions-cards__item-description">4.5 hours</p>
                    </div>
                </div>
            </div>
            <div className="questions-cards__items">
                <div className="questions-cards__item">
                    <img src={LogoQuestionsCards} alt="Pretty Logo"/>
                    <div className="questions-cards__item-text">
                        <h4 className="questions-cards__item-headline">Storyboarding</h4>
                        <p className="questions-cards__item-description">Who are you developing for? How will they use your design? Building user personas can answer these.</p>
                    </div>
                    <div className="questions-cards__item-services">
                        <p className="questions-cards__item-description">6 videos</p>
                        <div className="questions-cards__item-stic"></div>
                        <p className="questions-cards__item-description">4.5 hours</p>
                    </div>
                </div>
            </div>
            
            </div>
        </div>
        
    )
}