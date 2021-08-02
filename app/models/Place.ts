import {observable} from "mobx";

export type PlaceType = {
    id: string,
    title: string,
    image: any,
    setTitle: (title: string) => void;
    setImage: (image: any) => void;
} | null

export class Place {
    @observable id = new Date().toString();
    @observable title = ''
    @observable image = null


    setTitle = (title:string) => this.title = title;
    setImage = (image:any) => this.image = image;
}

export default Place;