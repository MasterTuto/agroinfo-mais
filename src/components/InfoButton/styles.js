import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		marginVertical: 10,
		padding: 5,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center'
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold'
	},
	description: {
		fontSize: 13,
	},
	infoButtonContent: {
		marginLeft: 10,
	}
});