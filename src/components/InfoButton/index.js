import React from 'react';
import {
	View,
	Text,
} from 'react-native';

import styles from './styles';

export default function InfoButton(props) {
	return (
		<View style={styles.container}>
			{props.icon}
			<View style={styles.infoButtonContent}>
				<Text style={styles.title}>{props.title}</Text>
				<Text style={styles.description}>{props.description}</Text>
			</View>
		</View>
	);
}