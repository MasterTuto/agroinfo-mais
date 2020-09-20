import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	cardView: {
		marginVertical: 17,
		padding: 10,
		flexDirection: 'row',
		elevation: 5,
		flexWrap: 'nowrap',
		borderRadius: 10,
	},
	cardTextView: {
		flex: 1,
		marginLeft: 20,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 20,
		flexWrap: 'nowrap',
	},
	warning: {
		backgroundColor: 'red',
	},
	info: {
		backgroundColor: "lightgreen",
	}
});