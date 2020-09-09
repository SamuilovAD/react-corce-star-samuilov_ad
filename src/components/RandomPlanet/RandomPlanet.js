import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RandomPlanet.css';
import SwapiService from "../../services/SwapiService";
import Spinner from "../spinner";
import ErrorIndicator from "../ErrorIndicator";

export default class RandomPlanet extends Component {
    static defaultProps = {
      updateInterval: 10000
    };
    static propTypes = {
        updateInterval: PropTypes.number.isRequired
    };
    swapiService = new SwapiService();
    state = {
        planet:{},
        loading:true,
        error: false
    };

    componentDidMount() {
        console.log('componentDidMount()');
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet,this.props.updateInterval);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount()');
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet, loading:false});
    };

    onError = () => {
        this.setState({
            error:true, loading:false
        });
    };

    updatePlanet =() => {
        console.log('update');
        const id = Math.floor(Math.random()*25)+2;
        this.swapiService.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
    };

    render() {
        console.log('render()');
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