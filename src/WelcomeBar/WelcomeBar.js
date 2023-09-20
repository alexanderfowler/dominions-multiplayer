import './WelcomeBar.css';
import horseMountain from './HorseMountain.png';
import squareBetaBanner from './SquareBetaBanner.png';

function WelcomeBar() {
    return (
        <div className="Welcome-bar">
            <div className="Horse-mountain-container">
              <img src={horseMountain} className="Horse-mountain-image"
                 alt="man on a war horse with a spear in front of a mountain"></img>
                <span className="Dominions-multiplayer-text-span"><h1 className="Dominions-multiplayer-text">Dominions Multiplayer</h1></span>
            </div>
            <img src={squareBetaBanner} className="Beta-banner"
                     alt="site beta banner"></img>
        </div>
    );
}

export default WelcomeBar;
