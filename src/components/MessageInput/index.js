import React, { useState } from 'react';
import {
	View,
	TextInput
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './styles';

export default function MessageInput() {
	var [message, setMessage] = useState('');

	return (
		<View style={styles.messageInputContainer}>
			<TextInput
				value={message}
				onChangeText={setMessage}
				style={styles.messageTextInput}
			/>

			<Entypo name="attachment" size={24} color="#444" style={styles.icon} />
			<FontAwesome5 name="microphone" size={24} color="#444" style={styles.icon}/>
		</View>
	);
}