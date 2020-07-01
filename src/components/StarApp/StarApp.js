import React, {Component} from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import './StarApp.css';
import SwapiService from "../../services/SwapiService";
import Row from "../Row";
import ErrorBoundary from "../ErrorBoundary";
import ItemDetails from "../ItemDetails";
import {Record} from "../ItemDetails/ItemDetails";

export default class StarApp extends Component{
    swapiService = new SwapiService();
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
        const { getPerson,
            getPersonImage} = this.swapiService;

        const randomPlanet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        const personsItemsList = (
            <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllStarships}
            renderItem={(item) => {return item.name}}
        >{(i) => (`${i.name}`)}</ItemList>);

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage} >

                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />

            </ItemDetails>
            );

        return (
        <ErrorBoundary>
            <Header/>
            {randomPlanet}
            <div className="mb2 button-row">
                <button
                    className="toggle-planet btn btn-warning btn-lg"
                    onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                </button>
            </div>
            <Row left={personsItemsList} right={personDetails}/>
        </ErrorBoundary>);
    };
};