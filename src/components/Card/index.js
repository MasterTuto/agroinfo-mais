import React from 'react'
import {
	View,
	Text
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export default function Card(props) {
	return (
		<View style={[styles.cardView, props.type == 'info' ? styles.info : styles.warning]}>
			{ props.type == 'info' ?
				<Ionicons name="ios-information-circle-outline" size={40} color="black" />
			:
				<Ionicons name="ios-warning" size={40} color="black" />
			}
			<View style={styles.cardTextView}>
				<Text style={styles.title}>{props.title}</Text>
				<Text style={styles.content}>{props.content}</Text>
			</View>
		</View>
	)
}