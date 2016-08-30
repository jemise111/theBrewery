import React, { Component } from 'react';

import {
	AppRegistry,
	Navigator,
	StyleSheet
} from 'react-native';

import HomeComponent from './HomeComponent';

class theBreweryNew extends Component {

	renderScene(route, navigator) {
		const Component = route.component;
		return <Component navigator={navigator} {...route} />
	}

	render() {
		return (
			<Navigator
				initialRoute={{component: HomeComponent}}
				renderScene={ (route, navigator) => this.renderScene(route, navigator) }
				style={styles.container}
			/>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

AppRegistry.registerComponent('theBreweryNew', _ => theBreweryNew);