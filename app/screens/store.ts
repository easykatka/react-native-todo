import {observable} from "mobx";


class Store {
    @observable title = '123'

    constructor() {
    }

    saveTitle = (title: string) => {
        this.title = title;
    }
}

export default new Store;