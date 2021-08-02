import {observable} from "mobx";
import {PlaceType} from "../models/Place";



class Store {
    @observable places = [] as Array<PlaceType>;

    constructor() {
    }


    addPlace = (place:PlaceType) => {

        this.places.push(place)
    }
};

export default new Store;