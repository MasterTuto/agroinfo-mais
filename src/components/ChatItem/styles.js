import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	chatItemView: {
		flexDirection: 'row',
		marginHorizontal: 25,
		marginVertical: 10,
	},
	profilePicture: {
		flex: 1,
		height: 60,
		borderRadius: 150,
		resizeMode: 'contain'
	},
	chatDataView: {
		flex: 5,
		justifyContent: 'center',
		paddingLeft: 10,
	},
	chatName: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	messagePreview: {
		fontSize: 20,
	},
	profileBadge: {
		fontSize: 30,
		alignSelf: 'center'
	},
	assistent: {
		color: 'green',
	},
	client: {
		color: 'red',
	},
	producer: {
		color: 'black',
	},
	vendor: {
		color: 'blue',
	},
});