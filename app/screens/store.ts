import {observable} from "mobx";



class Store {
    @observable places = [] as Array<Place>;

    constructor() {
    }


    addPlace = (place) => {

        this.places.push(place)
    }
};

export default new Store;