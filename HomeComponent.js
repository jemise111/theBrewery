import React, { Component } from 'react';

import {
	Image,
	ListView,
	StyleSheet,
	Text,
	TouchableHighlight,
	View
} from 'react-native';

import ProductComponent from './ProductComponent';

export default class HomeComponent extends Component {
	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			data: null
		};
	}

	componentDidMount() {
		fetch('http://api.brewerydb.com/v2/beers?key=7412e7a83ddfc802e0f0d8a93129ba58&abv=+3')
		.then((response) => response.json())
		.then((responseData) => {
			this.setState({
				data: responseData.data,
			});
		})
	}

	goToBeerPage(beer) {
		this.props.navigator.push({
			component: ProductComponent,
			beer: beer
		})
	}

	getImageSource(beer) {
		if (beer.labels) {
			return beer.labels.icon
		} else {
			return 'http://vivekarora.com/images/bottle1.png';
		}
	}

	render() {
		if (!this.state.data) {
			return (
				<View style={styles.noDataContainer}>
					<Text>Loading...</Text>
				</View>
			)
		}

		return (
			<View style={styles.container}>
				<View style={styles.headerWrapper}>
					<Text style={styles.headerText}>Beer above 3% abv</Text>
				</View>
				<ListView
					dataSource={this.ds.cloneWithRows(this.state.data)}
					renderRow={ beer => (
						<TouchableHighlight
							underlayColor={'#EEE'}
							onPress={ _ => this.goToBeerPage(beer) }
							style={styles.rowWrapper}
						>
							<View style={styles.innerWrapper}>
								<Image source={{uri: this.getImageSource(beer)}} style={styles.image} />
								<View style={styles.rightWrapper}>
									<Text numberOfLines={1} style={styles.nameText}>{beer.name}</Text>
									<Text style={styles.availableText}>{beer.style.category.name}</Text>
								</View>
								{
									beer.isOrganic === 'Y' &&
									<View style={styles.organicWrapper}>
										<Text style={styles.organicText}>Organic</Text>
									</View>
								}
							</View>
						</TouchableHighlight>
					)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	noDataContainer: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center'
	},
	container: {
		flex: 1
	},
	rowWrapper: {
		borderTopWidth: 1,
		borderTopColor: 'lightgrey',
		paddingTop: 10,
		paddingBottom: 10,
	},
	innerWrapper: {
		flex: 1,
		flexDirection: 'row'
	},
	headerWrapper: {
		paddingTop: 50,
		paddingBottom: 20,
	},
	headerText: {
		fontSize: 36,
		textAlign: 'center'
	},
	image: {
		height: 64,
		width: 64,
		marginRight: 10
	},
	rightWrapper: {
		flex: 1
	},
	nameText: {
		fontSize: 18
	},
	organicWrapper: {
		backgroundColor: 'green',
		width: 60,
		height: 22,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		position: 'absolute',
		bottom: 5,
		right: 5
	},
	organicText: {
		color: 'white'
	}
});