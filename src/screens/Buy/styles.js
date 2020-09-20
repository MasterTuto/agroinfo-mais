import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	buyScreenContainer: {
		marginHorizontal: 20,
		marginTop: 10,
		justifyContent: 'center',
	},
	header:{
		marginBottom: 10
	},
	title: {
		fontSize: 36,
	},
	searchBarContainer: {
		backgroundColor: 'lightgray',
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 90,
		paddingHorizontal: 20,
	},
	searchBarInput: {
		flex: 1,
		margin: 5,
		fontSize: 20,
	}
});