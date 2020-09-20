import React from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity
} from 'react-native';

import styles from './styles';

export default function ChatItem(props) {
	function goToChat() {
		props.navigation.navigate("SingleChatScreen", {
			id: props.userId
		})
	}

	return (
		<TouchableOpacity
			style={styles.chatItemView}
			onPress={goToChat}
		>
			<Image
				source={props.profilePicture}
				style={styles.profilePicture}
			/>

			<View style={styles.chatDataView}>
				<Text style={styles.chatName}>{ props.name }</Text>

				<Text styles={styles.messagePreview}>{props.lastMessage.content}</Text>
			</View>

			<Text
				style={[
					styles.profileBadge,
					
					props.badge == "T" ? styles.assistent :
					props.badge == "C" ? styles.client    :
					props.badge == "P" ? styles.producer  :
					                     styles.vendor // props.badge == "V"
				]}
			>
				{props.badge}
			</Text>

		</TouchableOpacity>
	);
}