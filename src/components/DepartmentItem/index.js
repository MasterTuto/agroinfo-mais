import React from 'react';
import {
	View,
	Text
} from 'react-native';

import styles from './styles';

export default function DepartmentItem(props) {
	return (
		<View style={styles.departmentItemContainer}>
			{props.icon}
			<Text style={styles.name}>{props.name}</Text>
		</View>
	);
}