import React from 'react';
import {
	View,
	Text,
	ScrollView
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import InfoButton from '../../components/InfoButton';

import styles from './styles';

export default function Info() {
	return (
		<ScrollView style={styles.infoContainer}>
			<InfoButton
				icon={<FontAwesome5 name="leaf" size={24} color="black" />}
				title="Contrate um especialista"
				description="Contrate um especialista para conversar"
			/>
			<InfoButton
				icon={<FontAwesome5 name="cash-register" size={24} color="black" />}
				title="Controle suas vendas"
				description="Veja seus pedidos e acompanhe seu progresso"
			/>
			<InfoButton
				icon={<FontAwesome5 name="hand-holding-usd" size={24} color="black" />}
				title="Seus benefícios"
				description="Veja quais os benefícios que você pode conseguir e como conseguir"
			/>
			<InfoButton
				icon={<FontAwesome name="usd" size={24} color="black" />}
				title="Crédito Rural"
				description="Conheça as opções"
			/>
			<InfoButton
				icon={<FontAwesome5 name="wrench" size={24} color="black" />}
				title="Configurações"
				description="Mude as opções do seu perfil, como aparece para os clientes"
			/>
		</ScrollView>
	);
}