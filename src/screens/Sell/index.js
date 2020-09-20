import React, { useState } from 'react';
import {
	View,
	Text,
	FlatList
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import SellItem from '../../components/SellItem';
import EditStoreItemScreen from '../EditStoreItemScreen';

import styles from './styles';

const Stack = createStackNavigator();

function SellScreen(props) {
	var [sellItems, setSellItems] = useState(
		[
			{
				id: 'null',
				isValid: false
			},
			{
				id: 'null2', 
				isValid: true,
				name: "Alface",
				price: '2.50',
				image: require('../../../assets/storeItems/lettuce.png')
			},
			{
				id: 'null3', 
				isValid: true,
				name: "Alface",
				price: '30.00',
				image: require('../../../assets/storeItems/lettuce.png')
			},
			{
				id: 'null4', 
				isValid: true,
				name: "Alface",
				price: '15.00',
				image: require('../../../assets/storeItems/lettuce.png')
			},

		]
	);

	if (props.route.params) {
		if (props.route.params.forceRefresh) {
			props.route.params.forceRefresh = false;
			setSellItems(sellItems);
		}
	}

	console.log(sellItems)

	function createData(sellItems, numColumns) {
		let newSellItems = [...sellItems];

		if (newSellItems.length % columns != 0) {
			for (let i=0; i < newSellItems.length % columns; i++) {
				newSellItems.push({
					id: Math.random().toString(),
					isValid: true,
					blank: true,
				})
			}
		}

		return newSellItems;
	}

	let columns = 3;

	return (
		<View style={ styles.sellView }>
			<FlatList
				data = {createData(sellItems, columns)}
				keyExtractor = {(item) => item.id}
				numColumns={columns}
				renderItem = { ( {item, index} ) => {
					if (!item.isValid) {
						return (
							<SellItem
								isBlank={ true }
								invisible={ item.blank }
								navigation={ props.navigation }
								modifyStoreItems={ setSellItems }
								storeItems={ sellItems }
								index={ index }
							/>
						)
					} else {
						return (
							<SellItem
								isBlank={false}
								invisible={item.blank}
								image={item.image}
								name={item.name}
								price={item.price}
								navigation={ props.navigation }
								modifyStoreItems={ setSellItems }
								storeItems={ sellItems }
								index={index}
							/>
						)
					}
				}}
			/>
		</View>
	);
}



export default function Sell() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="SellScreen"
				component={SellScreen}
				options={{
					title: "Infoagro+"
				}}
			/>

			<Stack.Screen
				name="EditScreen"
				component={EditStoreItemScreen}
				options={{
					title: "Adicionar / Editar Item da Loja"
				}}
			/>
		</Stack.Navigator>
	);
}