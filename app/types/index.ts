import {StackNavigationProp} from "@react-navigation/stack";

export type PlacesAppScreenNavigation = {
    "PlacesList": undefined,
    "New Place": undefined,
    "Map": undefined,
    "Place Datail": undefined,
};
export type PlacesListcreenNavigationProp =
    StackNavigationProp<PlacesAppScreenNavigation, 'PlacesList'>
export type NewPlaceScreenNavigationProp =
    StackNavigationProp<PlacesAppScreenNavigation, 'New Place'>
export type MapScreenNavigationProp =
    StackNavigationProp<PlacesAppScreenNavigation, 'Map'>
export type PlaceDatailScreenNavigationProp =
    StackNavigationProp<PlacesAppScreenNavigation, 'Place Datail'>
