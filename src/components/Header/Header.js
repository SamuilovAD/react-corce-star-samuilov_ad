import React, {Component} from "react";
import './Header.css';

export default class Header extends Component{
    render() {
        const {toggleSwapiService} = this.props;
        return(<div className = "header d-flex">
            <h3>
                <a href="#">
                    Star DB
                </a>
            </h3>
            <ul className="d-flex">
                <li>
                    <a href="#">People</a>
                </li>
                <li>
                    <a href="#">Planets</a>
                </li>
                <li>
                    <a href="#">Starships</a>
                </li>
            </ul>
            <button
                className="btn btn-primary toggle-swapi-class"
                onClick={toggleSwapiService}
            >Toggle swapi service</button>
        </div>);
    }
}