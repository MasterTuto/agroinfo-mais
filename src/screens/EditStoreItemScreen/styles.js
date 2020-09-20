import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
	inputBlockView: {
		marginHorizontal: 25,
		marginTop: 10,
		paddingHorizontal: 15,
		paddingVertical: 10,
		elevation: 4,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#3c3c3c55',
		backgroundColor: 'white',
		borderRadius: 10
	},
	inputLegend: {
		fontWeight: 'bold',
		fontSize: 20,
		marginBottom: 20,
	},
	input: {
		padding: 5,
		borderRadius: 30,
		fontSize: 18,
		paddingLeft: 20,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#3c3c3c',
		marginBottom: 20,
	},
	submitButtonView: {
		margin: 25,
		padding: 15,
	},
	choosePhotoButtonImage: {
		height: 90,
		resizeMode: 'contain',
	},
	choosePhotoButtonText: {

	}
});