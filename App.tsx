import React from 'react'
import * as Font from 'expo-font';
import {observable} from "mobx";
import {observer} from "mobx-react";
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens'
import {MainNavigator} from "./app/navigation";

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
				{/*<Drawer => bottom tabs => screen stacks />*/}
				<MainNavigator/>
			</NavigationContainer>
		)
	}
};




