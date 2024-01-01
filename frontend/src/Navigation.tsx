import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation() {

    return (
        <header className="App-header">
            <nav id="primary-navigation">
                <ul id="left-nav">
                    <li className="nav-list-element"><Link to="/">Home</Link></li>
                    <li className="nav-list-element"><Link to="/prompts">My Prompts </Link></li>
                    <li className="nav-list-element"><Link to="/trackers">My Trackers</Link></li>
                    <li className="nav-list-element"><Link to="/stats">My Stats</Link></li>
                </ul>
                <ul id="right-nav">
                    <li className="nav-list-element"><Link to="/auth">Logout </Link></li>
                </ul>
                
            </nav>
        </header>
    )

}
export default Navigation;
