import '../../Scss/Container.scss';
import './Instructor.scss';
import PNGInstructor from '../../Img/Instructor.png';
export const Instructor = () => {
    return (
        <div className="container">
            <div className="about-instructor">
                <div className="about-instructor__text">
                    <h2 className="about-instructor__h2">Hi, I am David, your course instructor.</h2>
                    <h3 className="about-instructor__h3">Create beautiful webflow sites with flowbase. Clone for
                        free and get started building a site today.</h3>
                </div>
                <div className="about-instructor__photo">
                    <img src={PNGInstructor} alt="Instructor" />
                </div>
                
            </div>
        </div>
    )
}