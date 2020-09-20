import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	Button,
	ScrollView,
	TouchableOpacity,
	Image
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import styles from './styles';

export default function EditStoreItemScreen(props) {

	const params = props.route.params;
	
	function submit() {
		if (params.action === 'edit') {
			
			params.storeItems[params.index] = {
				...params.storeItems[params.index],
				name: name,
				price: price,
				image: picture,
			};

			
			params.modifyStoreItems(params.storeItems);

		} else if (params.action === 'addNew') {

			console.log("\n\n\n");
			console.log(params.storeItems);
			console.log("================");
			
			params.storeItems.push({
				id: Math.random().toString(),
				isValid: true,
				name: name,
				price: price,
				image: picture,
			});
			console.log(params.storeItems);
			console.log("================");
			params.modifyStoreItems(params.storeItems);
		}
		
		props.navigation.navigate("SellScreen", {
			forceRefresh: true,
		});
	}

	async function getPermissions() {
		const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
		if (status !== 'granted') {
			return false;
		} else {
			return true;
		}
	}

	async function chooseImage() {
		if (getPermissions()) {
			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				allowsEditing: true,
				aspect: [1, 1],
				quality: 1,
			})

			if (!result.cancelled) {
				setPicture({ uri: result.uri } )
			}
		}
	}

	
	const [name, setName] = useState(params.name);
	const [price, setPrice] = useState(params.price);
	const [picture, setPicture] = useState(params.image);

	return (
		<ScrollView style={styles.editStoreItemScreen}>

			<View style={styles.inputBlockView}>
				<Text style={styles.inputLegend}>Imagem:</Text>
				<TouchableOpacity onPress={chooseImage} >
					<Image
						source={picture || require("../../../assets/storeItems/placeholder.png")}
						style={styles.choosePhotoButtonImage}
					/>
					<Text style={styles.choosePhotoButtonText}>
						Clique para escolher a imagem
					</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.inputBlockView}>
				<Text style={styles.inputLegend}>Nome:</Text>
				<TextInput
					value={name}
					onChangeText={setName}
					style={styles.input}
				/>
			</View>

			<View style={styles.inputBlockView}>
				<Text style={styles.inputLegend}>Preço:</Text>
				<TextInput
					value={price ? price.toString() : price}
					onChangeText={setPrice}
					style={styles.input}
					keyboardType={'decimal-pad'}
				/>
			</View>

			<View style={styles.submitButtonView}>
				<Button
					title="Salvar produto"
					onPress={submit}
					style={styles.submitButton}
				/>
			</View>
		</ScrollView>
	);
}