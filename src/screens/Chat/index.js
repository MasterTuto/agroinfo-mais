// NPM Modules imports
import React, { useState } from 'react';
import {
	View,
	FlatList
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// Components  imports
import ChatItem from '../../components/ChatItem';
import Separator from '../../components/Separator';

// Screens imports
import SingleChatScreen from '../SingleChatScreen';


// style import
import styles from './styles';

function ChatScreen(props) {
	let [chats, setChats] = useState([
		{
			id: 'usuario1',
			profilePicture: require('../../../assets/chatItems/profile-placeholder.png'),
			name: 'Adilson Guimarães',
			badge: 'T',
			lastMessage: {
				senderId: "usuario2",
				content: "sim, quero que envie naquele endereco",
				contentType: 'text',
				time: 1600544619
			}
		},
		{
			id: 'usuario2',
			profilePicture: require('../../../assets/chatItems/profile-placeholder.png'),
			name: 'Lucas Rodrigues',
			badge: 'P',
			lastMessage: {
				senderId: "usuario2",
				content: "Compra quase finalizada",
				contentType: 'text',
				time: 1600544619
			}
		},
		{
			id: 'usuario3',
			profilePicture: require('../../../assets/chatItems/profile-placeholder.png'),
			name: 'Gabriel Azevedo',
			badge: 'V',
			lastMessage: {
				senderId: "usuario3",
				content: "Negócio quase fechado",
				contentType: 'text',
				time: 1600544619
			}
		},
		{
			id: 'usuario4',
			profilePicture: require('../../../assets/chatItems/profile-placeholder.png'),
			name: 'João do Posto',
			badge: 'C',
			lastMessage: {
				senderId: "usuario3",
				content: "Negócio quase fechado",
				contentType: 'text',
				time: 1600544619
			}
		},
	]);

	console.log(chats);

	return (
		<View style={styles.chatScreenView}>
			<FlatList
				keyExtractor={item => item.id}
				data={chats}
				renderItem={( { item, index }) => {
					return (
						<ChatItem
							userId={item.id}
							profilePicture={item.profilePicture}
							name={item.name}
							lastMessage={item.lastMessage}
							badge={item.badge}
							navigation={props.navigation}
						/>
					);
				}}
				ItemSeparatorComponent={() => <Separator/>}
			/>
		</View>
	);
}


const Stack = createStackNavigator();

export default function Chat() {
	return (

		<Stack.Navigator mode="modal">
			<Stack.Screen
				name="ChatScreen"
				component={ChatScreen}
				options={{
					title: "Agroinfo+"
				}}
			/>

			<Stack.Screen
				name="SingleChatScreen"
				component={SingleChatScreen}
			/>
		</Stack.Navigator>
	);
}