import React, {useState} from 'react';
import {
	View,
	Text,
	TextInput,
	FlatList
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import DepartmentItem from '../../components/DepartmentItem';

import styles from './styles';

export default function Buy() {
	let [searchTerm, setSearchTerm] = useState('');
	let [departments, setDepartments] = useState([
			{
				id: '1',
				icon: <MaterialCommunityIcons name="food-apple" size={24} color="black" />,
				name: "Frutas"
			},
			{
				id: '2',
				icon: <MaterialCommunityIcons name="carrot" size={24} color="black" />,
				name: "Verduras"
			},
			{
				id: '3',
				icon: <MaterialCommunityIcons name="cow" size={24} color="black" />,
				name: "Leite"
			},
			{
				id: '4',
				icon: <MaterialCommunityIcons name="tractor" size={24} color="black" />,
				name: "Maquinário"
			}
		]);

	return (
		<View style={styles.buyScreenContainer}>
			<View style={styles.header}>
				<Text style={styles.title}>O que deseja comprar?</Text>
				<View style={styles.searchBarContainer}>
					<MaterialIcons name="search" size={26} color="black" style={styles.icon} />
					<TextInput
						value={searchTerm}
						onChangeText={setSearchTerm}
						style={styles.searchBarInput}
					/>
				</View>
			</View>

			<FlatList
				data={departments}
				keyExtractor={item => item.id}
				numColumns={3}
				renderItem={({item, index}) => {
					return <DepartmentItem
						icon={item.icon}
						name={item.name}
					/>
				}}
			/>
		</View>
	);
}