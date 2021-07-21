import React from 'react'
import * as Font from 'expo-font';
import {observable} from "mobx";
import {observer} from "mobx-react";
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens'
import {MealsStackScreen, Tab} from "./app/navigation";
import {Favorites} from "./app/screens";
import {Ionicons} from "@expo/vector-icons";
import Colors from "./app/constans/color";

@observer
export default class App extends React.Component {
	@observable fontLoaded: boolean = false;

	constructor(props: any) {
		super(props)
		enableScreens();
		this.init();
	};

	init = async () => {
		await Font.loadAsync
		({
			'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
			'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
		});
		this.fontLoaded = true;

	};

	render() {
		if (!this.fontLoaded) return null;
		return (
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={({route}) => ({
						tabBarLabel: route.name === 'Meals' ? 'Meals!' : 'Favorites!',
						tabBarIcon: ({focused, color, size}) => {
							let iconName: any;
							if (route.name === 'Meals') {
								iconName = focused
									? 'ios-restaurant'
									: 'ios-restaurant-outline';
							} else if (route.name === 'Favorites') {
								iconName = 'ios-star'
							}
							return < Ionicons name={iconName} size={size}
											  color={color}/>;
						},
					})}

					tabBarOptions={{
						activeTintColor: Colors.primaryColor,
						inactiveTintColor: 'black',
					}}
				>
					<Tab.Screen


						name="Meals" component={MealsStackScreen}/>
					<Tab.Screen name="Favorites" component={Favorites}/>
				</Tab.Navigator>
			</NavigationContainer>

		)
	}
};




