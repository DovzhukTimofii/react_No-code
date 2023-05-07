import '../../Scss/Container.scss';
import './Statistics.scss';

export const Statistics = () => {
    return (
        <div className="statistics">
            <div className="purple__circle">
                <div className="small-yellow__circle"></div>
            </div> 
            <div className="half__circle"></div>
            <div className="container">
                <div className="statistic__table">
                    <div className="statistic__table--box ">
                        <span className="statistic__number">12,201</span>
                        <span>happy students</span>
                    </div>
                    <div className="statistic__stick"></div>
                    <div className="statistic__table--box">
                        <span className="statistic__number">3,291</span>
                        <span>lectures</span>
                    </div>
                    <div className="statistic__stick"></div>
                    <div className="statistic__table--box">
                        <span className="statistic__number">1,291</span>
                        <span>5 star reviews</span>
                    </div>
                </div>
            </div>
        </div>
    )
}