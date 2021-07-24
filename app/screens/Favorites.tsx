import React from 'react';
import {MealList} from "../components/MealList";
import {MEALS} from "../data/dummy-data";

export const Favorites: React.FC = (props) => {
    const displayedMeals = MEALS
        .filter(meal => meal.id === 'm2')
    return <MealList displayedMeals={displayedMeals}/>
};
