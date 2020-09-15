import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
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
        swapiService: new SwapiService()
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
                <Router>
                    <Header toggleSwapiService={this.toggleSwapiService}/>
                    {randomPlanet}
                    <div className="mb2 button-row">
                        <button
                            className="toggle-planet btn btn-warning btn-lg"
                            onClick={this.toggleRandomPlanet}>
                            Toggle Random Planet
                        </button>
                    </div>
                    <Route path="/" render = {()=>"Welcome to the root"} exact/>
                    <Route path="/people" exact component={PeoplePage}/>
                    <Route path="/people/:id" render = {({match, location, history}) => {
                        const id = match.params.id;
                        console.log('id: '+id);
                        return <PersonDetails itemId={id}/>;
                    }}/>
                </Router>
            </SwapiServiceProvider>
        </ErrorBoundary>);
    };
};