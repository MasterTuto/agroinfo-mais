import React from 'react';
import {
	View,
	Text
} from 'react-native';

import styles from './styles';

export default function MessageItem(props) {
	console.log(props.sender);
	return (
		<View style={[styles.messageItem, props.senderId == ':self:' ? styles.renderSelf : styles.renderOther ] }> 
			<Text style={styles.messageText}>{props.content}</Text>
		</View>
	);
}