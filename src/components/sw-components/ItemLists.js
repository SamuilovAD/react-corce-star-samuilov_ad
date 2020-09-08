import React from "react";
import ItemList from "../ItemList";
import {withData} from "../hoc-helpers";
import SwapiService from "../../services/SwapiService";
import withSwapiService from "../hoc-helpers/withSwapiService";

const swapiService = new SwapiService();

const {
    getAllPeople
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        );
    }
};

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};

const PersonList = withSwapiService(withData(withChildFunction(ItemList, ({name}) => <span>{name}</span>)), mapPersonMethodsToProps);
export {
    PersonList
};