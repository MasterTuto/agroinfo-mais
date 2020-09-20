import React from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity
} from 'react-native';

import styles from './styles';

export default function SellItem(props) {
	function goToEditScreen(action, id) {
		props.navigation.navigate('EditScreen', {
			action           : action,
			name             : props.name,
			price            : props.price,
			image            : props.image,
			modifyStoreItems : props.modifyStoreItems,
			storeItems       : props.storeItems,
			index			 : props.index,
		});
	}

	if ( props.invisible ) {

		return (
			<View style={ styles.invisible }></View>
		);	

	} else if ( props.isBlank ) {

		return (
			<TouchableOpacity onPress={ () => goToEditScreen('addNew') } style={ styles.sellItemView } >
				<Text>Adicionar Produto</Text>
			</TouchableOpacity>
		);
	
	} else {

		return (
			<TouchableOpacity onPress={ () => goToEditScreen('edit', props.id) } style={ styles.sellItemView } >
					<Image
						source={props.image}
						style={styles.sellItemImage}
					/>

					<Text
						style={styles.sellItemName}
					>
						{props.name}
					</Text>

					<Text
						style={styles.sellItemPrice}
					>
						R$ { Number.parseFloat(props.price).toFixed(2) }
					</Text>
			</TouchableOpacity>
		);

	}
}