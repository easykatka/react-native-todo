import { RouteProp } from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";

export type MealsStackParamList = {
    Categories: undefined,
    CategoryMeals:{categoryId: string},
    MealDetail:undefined,
    Filters:undefined
};
export type CategoriesScreenNavigationProp = StackNavigationProp <
    MealsStackParamList, 'Categories'>
export type CategoryMealsScreenNavigationProp = StackNavigationProp <
    MealsStackParamList, 'CategoryMeals'>


export type CategoryMealsScreenRouteProp = RouteProp<MealsStackParamList, 'CategoryMeals'>;
