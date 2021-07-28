import {observable} from "mobx";

export class Place {
    id
    title
    constructor(id:string, title:string) {
        this.id = id;
        this.title = title;
    }
}

class Store {
    @observable places = [] as Array<Place>;

    constructor() {
    }


    addPlace = (title:string) => {
        const place = new Place(new Date().toString() , title)
        this.places.push(place)
        console.log(this.places,'p')
    }
};

export default new Store;