import React from 'react';
import {
	ScrollView,
	View,
	Text,
	Image
} from 'react-native';

import Card from '../../components/Card';

import styles from './styles';

export default function Home() {
	return (
		<ScrollView style={styles.homeScreenView}>
			<Image
				source={require('../../../assets/logo.png')}
				style={styles.logo}
			/>
			<Text style={styles.sectionTitle}>Resumo das informações</Text>
			<Card
				type="info"
				title="Iai agricultor, quer saber mais sobre a linha de crédito que você tem direito?"
				content="Clique aqui pra saber mais sobre o PRONAF!"
			/>

			<Card
				type="warning"
				title="Parece que você não cadastrou nenhum produto"
				content="Clique na lojinha no canto e conserte isso."
			/>

			<Text style={styles.sectionTitle}>Utilidades</Text>
			<Card
				type="info"
				title="Que tal uma ajuda na sua propriedade produtor?"
				content="Contrate um especialista agora mesmo!"
			/>
		</ScrollView>
	);
}