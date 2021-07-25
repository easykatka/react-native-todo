import {observable} from 'mobx';
import {MEALS} from "../data/dummy-data";
import {IMeal} from "../models/meal";


class Store {

    @observable isGlutenFree = false;
    @observable isLastoseFree = false;
    @observable isVegan = false;
    @observable isVegetarian = false;
    @observable filteredMeals = [] as Array<IMeal>;
    @observable favoriteMeals = [] as Array<IMeal>;

    constructor() {
        this.init();
    }

    init = () => {
        this.filteredMeals = MEALS.filter(item => {
            if (this.isGlutenFree && !item.isGlutenFree) return false;
            if (this.isLastoseFree && !item.isLactoseFree) return false;
            if (this.isVegan && !item.isVegan) return false;
            return !(this.isVegetarian && !item.isVegetarian);
        });
    };


    toggleGluten = (boolean: boolean) => {
        this.isGlutenFree = boolean;
        this.init();
    };
    toggleLastose = (boolean: boolean) => {
        this.isLastoseFree = boolean;
        this.init();
    };
    toggleVegan = (boolean: boolean) => {
        this.isVegan = boolean;
        this.init();
    };
    toggleVegetarian = (boolean: boolean) => {
        this.isVegetarian = boolean;
        this.init();
    };

    toggleFavorite = (id: string) => {
        const exist = this.favoriteMeals.find(item => item.id === id);
        if (exist) {
            this.favoriteMeals = this.favoriteMeals.filter(item => item.id !== id)
        } else {
            const meal = MEALS.find(item => item.id === id)
            meal && this.favoriteMeals.push(meal)
        }
    };
}

export default new Store;

