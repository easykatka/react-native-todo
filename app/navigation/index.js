import * as Screens from "../screens/";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import Colors from "../constans/color";


const MealsNavigation = createStackNavigator({
        Categories: Screens.Categories,
        CategoryMeals: Screens.CategoryMeals,
        Favorites: Screens.Favorites,
        MealDetail: Screens.MealDetail,
        Filters: Screens.Filters
    },
     {
        defaultNavigationOptions: {
            headerTitle: 'Meal Categories',
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : Colors.accentColor
            },
            headerTintColor: 'white',

        }
    });

export default createAppContainer(MealsNavigation)
