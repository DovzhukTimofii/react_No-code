import '../../Scss/Container.scss';
import './Main-screen.scss';
import Oval from '../../Img/Oval.png';
import Xoval from '../../Img/Xoval.png';
import Noval from '../../Img/Noval.png';
export const MainScreen = () => {
    return(
        <main className="main">
            <div className="main-screen">
                <div className="main-screen__content">
                    <div className="main-screen__content-box">
                        <h1>Learn no-code tools today.</h1>
                        <p>Create beautiful webflow sites with flowbase. Clone for
                            free and get started building a site today.</p>
                        <button className="main-screen__button">Get started</button>

                        <div className="main-screen--foto-box">
                            <div className="photo_of_students">
                                <img src={Oval} alt="Oval"/>
                                <img className='noval' src={Noval} alt="Noval"/>
                                <img className='noval' src={Xoval} alt="Xoval"/>
                            </div>

                            <p>
                                Join over
                                <span className="color_of_number">4,000+</span>
                                students
                            </p>
                        </div>
                    </div>
                </div>

                <div className="main-screen__video">
                    <div className="main-screen__video-container">
                        <iframe src="https://www.youtube.com/embed/nx_2KIwYEWA" title="A new era of no-code" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </main>
    )
}