import {StackNavigationProp} from "@react-navigation/stack";
import {RouteProp} from "@react-navigation/native";

export type PlacesAppScreenNavigation = {
    'All places': undefined,
    'New place': undefined,
    "Map": undefined,
    "Place detail": {id:string,title:string},
};
export type PlacesListcreenNavigationProp =
    StackNavigationProp<PlacesAppScreenNavigation, 'All places'>
export type NewPlaceScreenNavigationProp =
    StackNavigationProp<PlacesAppScreenNavigation, 'New place'>
export type MapScreenNavigationProp =
    StackNavigationProp<PlacesAppScreenNavigation, 'Map'>
export type PlaceDatailScreenNavigationProp =
    StackNavigationProp<PlacesAppScreenNavigation, 'Place detail'>

export type PlaceDetailRoute = RouteProp<PlacesAppScreenNavigation, 'Place detail'>
