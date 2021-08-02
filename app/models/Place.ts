import {observable} from "mobx";

type PlaceType = {
    id: string,
    title: string,
    image: Object
}

export class Place extends PlaceType{
    @observable id = new Date().toString();
    @observable title = ''
    @observable image = null;


    setTitle = (title: string) => this.title = title;
    setImage = (image: object) => this.image = image;
}

export default new Place;