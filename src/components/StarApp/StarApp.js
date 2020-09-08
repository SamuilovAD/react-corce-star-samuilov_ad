import React, {Component} from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import './StarApp.css';
import SwapiService from "../../services/SwapiService";
import Row from "../Row";
import ErrorBoundary from "../ErrorBoundary";
import {
    PersonList,
    PersonDetails
} from "../sw-components";
import {
    SwapiServiceProvider,
} from "../swapi-service-context";
import DummySwapiService from "../../services/DummySwapiService";
import PeoplePage from "../page";

export default class StarApp extends Component{

    state = {
        showRandomPlanet: true,
        swapiService: new DummySwapiService()
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    toggleSwapiService = () => {
        //console.log(this.state.swapiService);
        this.setState(({swapiService}) => {
            const NewService = swapiService instanceof DummySwapiService? SwapiService: DummySwapiService;
            return {
                swapiService: new NewService()
            }
        });
    }

    render() {

        const randomPlanet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        return (
        <ErrorBoundary>
            <SwapiServiceProvider value={this.state.swapiService}>
                <Header toggleSwapiService={this.toggleSwapiService}/>
                {randomPlanet}
                <div className="mb2 button-row">
                    <button
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet
                    </button>
                </div>
                <PeoplePage/>
            </SwapiServiceProvider>
        </ErrorBoundary>);
    };
};