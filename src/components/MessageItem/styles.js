import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	messageItem: {
		flex: 1,
		padding: 7,
		margin: 2,
		maxWidth: 200,
		borderStyle: 'solid',
		borderColor: 'black',
		borderWidth: 1,
		alignSelf: 'center',
	},
	renderSelf: {
		flex: 1,
		alignSelf: 'flex-end',
		backgroundColor: 'white',
	},
	renderOther: {
		backgroundColor: 'lightgray',
		alignSelf: 'flex-start',
	}
});