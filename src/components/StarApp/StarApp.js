import React, {Component} from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import './StarApp.css';
export default class StarApp extends Component{
    state = {
        showRandomPlanet: true,
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    render() {
        const randomPlanet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;
        return (<div>
            <Header/>
            {randomPlanet}
            <div className="mb2 button-row">
                <button
                    className="toggle-planet btn btn-warning btn-lg"
                    onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                </button>
            </div>
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList/>
                </div>
                <div className="col-md-6">
                    <PersonDetails/>
                </div>
            </div>
        </div>);
    };
};