import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	sellItemView: {
		flex: 1,
		height: 90,
		marginHorizontal: 5,
		marginBottom: 10,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#000',
		borderRadius: 10,
		elevation: 5,
	},

	invisible: {
		flex: 1,
		height: 90,
		marginHorizontal: 5,
		marginBottom: 10,
	},

	sellItemImage: {
		flex: 2,
		resizeMode: 'contain'
	},

	sellItemName: {
		flex: 1,
		fontWeight: 'bold',
		fontSize: 20,
	},

	sellItemPrice: {
		flex: 1,
		fontWeight: '900'
	}
});