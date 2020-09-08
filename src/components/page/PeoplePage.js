import React, {Component} from "react";
import Row from "../Row";
import {PersonDetails, PersonList} from "../sw-components";

export default class PeoplePage extends Component {
    state = {
        selectedItem: null,
    };
    onItemSelected = (selectedItem) => {
        this.setState({selectedItem});
    }

    render() {

        const personsItemsList = (<PersonList onItemSelected={this.onItemSelected}/>);
        const personDetails = (<PersonDetails itemId={this.state.selectedItem} />);

        return (<Row left={personsItemsList} right={personDetails}/>);
    }
};