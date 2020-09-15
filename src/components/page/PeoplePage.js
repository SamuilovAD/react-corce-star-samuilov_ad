import React, {Component} from "react";
import Row from "../Row";
import {PersonList} from "../sw-components";
import { withRouter } from 'react-router-dom';

const PeoplePage = ({history}) => {
    return (<PersonList onItemSelected={(itemId) => {
        history.push(`/people/${itemId}`);
        }
    }/>);
};

export default withRouter(PeoplePage);