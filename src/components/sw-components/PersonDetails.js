import React from "react";
import ItemDetails,{Record} from "../ItemDetails";
import withSwapiService from "../hoc-helpers/withSwapiService";

const PersonDetails = ({itemId, getData,getImageUrl}) => {
    console.log("ITEEEEEEEEMAS",itemId,getData);
    return (<ItemDetails
        itemId={itemId}
        getData={getData}
        getImageUrl={getImageUrl}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>);
};
const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
};

export default withSwapiService(PersonDetails, mapMethodsToProps);