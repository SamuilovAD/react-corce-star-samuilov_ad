import React, { Component } from 'react';

import './RandomPlanet.css';
import SwapiService from "../../services/SwapiService";
import Spinner from "../spinner";
import ErrorIndicator from "../ErrorIndicator";

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();
    state = {
        planet:{},
        loading:true,
        error: false
    };
    constructor() {
        super();
        this.updatePlanet();
    }
    onPlanetLoaded = (planet) => {
        this.setState({planet, loading:false});
    };

    onError = () => {
        this.setState({
            error:true, loading:false
        });
    };

    updatePlanet(){
        const id = Math.floor(Math.random()*25)+2;
        this.swapiService.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
    }
    render() {
        const {planet,loading, error} = this.state;
        const errorMessage = error ? <ErrorIndicator/>: null;
        const spinner = loading ? <Spinner/> : null;
        const content = !loading && !error ? <PlanetView planet={planet}/> : null;
        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {content}
                {errorMessage}
            </div>
        );
    }
}

const PlanetView = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet;
    return (
        <React.Fragment>
            <img alt="t" className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            <h4 className="h4">{name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <span className="term">Population</span>
                    <span>{population}</span>
                </li>
                <li className="list-group-item">
                    <span className="term">Rotation Period</span>
                    <span>{rotationPeriod}</span>
                </li>
                <li className="list-group-item">
                    <span className="term">Diameter</span>
                    <span>{diameter}</span>
                </li>
            </ul>
        </React.Fragment>
    );
};