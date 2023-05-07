import { useState } from 'react' 
import './Respons-card.scss'
import arrow from '../../Img/arow.svg'

export const ResponsCards = () => {

    const [oneTextState, setOneTextState] = useState(false);
    const [twoTextState, setTwoTextState] = useState(false);
    const [threeTextState, setThreeTextState] = useState(false);
    const [fourTextState, setFourTextState] = useState(false);

    function OneHandleClick() {
        setOneTextState(oneTextState => !oneTextState)
    }
    function TwoHandleClick() {
        setTwoTextState(twoTextState => !twoTextState)
    }
    function ThreeHandleClick() {
        setThreeTextState(threeTextState => !threeTextState)
    }
    function FourHandleClick() {
        setFourTextState(fourTextState => !fourTextState)
    }

    let toogleTextOne = oneTextState ? 'respons-card__active' : null;
    let toogleButtonOne = oneTextState ? 'respons-card__button-active' : null;

    let toogleTextTwo =twoTextState ? 'respons-card__active' : null;
    let toogleButtonTwo = twoTextState ? 'respons-card__button-active' : null;

    let toogleTextThree = threeTextState ? 'respons-card__active' : null;
    let toogleButtonThree = threeTextState ? 'respons-card__button-active' : null;

    let toogleTextFour = fourTextState ? 'respons-card__active' : null;
    let toogleButtonFour = fourTextState ? 'respons-card__button-active' : null;

    
    return (
        <div className="respons-cards">
            <h2 className="respons-cards__h2">Frequently asked questions</h2>
            <div className="respons-card">
                <div className="respons-card__text">
                    <h3 className="respons-card__headline">Will I get full access to the course after purchasing?</h3>
                    <p className={`respons-card__description ${toogleTextOne}`}>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                </div>
                <button onClick={OneHandleClick} className={`respons-card__button ${toogleButtonOne}`}>
                    <img src={arrow} alt="arrow from button" />
                </button>
            </div>
            <div className="respons-card">
                <div className="respons-card__text">
                    <h3 className="respons-card__headline">Do you give money back guarantee?</h3>
                    <p className={`respons-card__description ${toogleTextTwo}`}>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                </div>
                <button onClick={TwoHandleClick} className={`respons-card__button ${toogleButtonTwo}`}>
                    <img src={arrow} alt="arrow from button" />
                </button>
            </div>
            <div className="respons-card">
                <div className="respons-card__text">
                    <h3 className="respons-card__headline">Do you offer a discount?</h3>
                    <p className={`respons-card__description ${toogleTextThree}`}>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                </div>
                <button onClick={ThreeHandleClick} className={`respons-card__button ${toogleButtonThree}`}>
                    <img src={arrow} alt="arrow from button" />
                </button>
            </div>
            <div className="respons-card">
                <div className="respons-card__text">
                    <h3 className="respons-card__headline">Do you offer support after joining?</h3>
                    <p className={`respons-card__description ${toogleTextFour}`}>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                </div>
                <button onClick={FourHandleClick} className={`respons-card__button ${toogleButtonFour}`}>
                    <img src={arrow} alt="arrow from button" />
                </button>
            </div>
            
        </div>
        
    )
}