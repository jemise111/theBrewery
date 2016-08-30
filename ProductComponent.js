import React, { Component } from 'react';

import {
	Image,
	ListView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

export default class ProductComponent extends Component {
	
	getImageSource() {
		if (this.props.beer.labels) {
			return this.props.beer.labels.medium
		} else {
			return 'http://vivekarora.com/images/bottle1.png';
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.top}>
					<Image style={styles.image} source={{uri: this.getImageSource()}} />
				</View>
				<View style={styles.bottom}>
					<Text style={styles.nameText}>{this.props.beer.name}</Text>
					<Text style={styles.descText}>{this.props.beer.description}</Text>
				</View>
				<TouchableOpacity
					onPress={ _ => this.props.navigator.pop() }
					style={styles.backbuttonWrapper}
				>
					<Text style={styles.backButtonText}>&lt; back</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		flex: 1
	},
	backbuttonWrapper: {
		top: 40,
		left: 20,
		position: 'absolute'
	},
	backButtonText: {
		color: 'blue'
	},
	top: {
		paddingTop: 100,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		height: 200,
		width: 200
	},
	bottom: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'space-around',
		paddingLeft: 20,
		paddingRight: 20,
	},
	nameText: {
		fontSize: 24
	},
	descText: {
		fontSize: 16
	}
});