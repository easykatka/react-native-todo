import { RouteProp } from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {IMeal} from "../models/meal";

export type MealsStackParamList = {
    Categories: undefined,
    CategoryMeals:{categoryId: string},
    MealDetail: {meal:IMeal},
    Filters:undefined
};
export type CategoriesScreenNavigationProp = StackNavigationProp <
    MealsStackParamList, 'Categories'>
export type CategoryMealsScreenNavigationProp = StackNavigationProp <
    MealsStackParamList, 'CategoryMeals'>
export type MealDetailScreenNavigationProp = StackNavigationProp <
    MealsStackParamList, 'MealDetail'>


export type CategoryMealsScreenRouteProp = RouteProp<MealsStackParamList, 'CategoryMeals'>;
export type MealDetailScreenRouteProp = RouteProp<MealsStackParamList, 'MealDetail'>;
