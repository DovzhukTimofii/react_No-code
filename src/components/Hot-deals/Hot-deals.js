import './Hot-deals.scss';

export const HotDeals = () => {
    return (
        <div className="hot-deals">
            <div className="hot-deals__warning">
                <span className="hot-deals__warning-text">Get 30 Days Money Back Guarantee</span>
            </div>
            <h2 className="hot-deals__h2">Ready to learn UX Design from the expert?</h2>
            <button className="hot-deals__button">Get started</button>
            <div className="hot-deals__circle">
                <div className="hot-deals__mini-circle"/>
            </div>
            
        </div>
    )
}