import React, { useState } from 'react';
import {
	View,
	Text,
	FlatList
} from 'react-native';

import MessageItem from '../../components/MessageItem';
import MessageInput from '../../components/MessageInput';

import styles from './styles';

export default function SingleChatSCreen(props) {
	var [data, setData] = useState({
		usuario1: [
			{
				id: Math.random().toString(),
				content: "Oi, tudo bem?",
				senderId: ':self:',
				contentType: 'text',
			},
			{
				id: Math.random().toString(),
				content: "Queria perguntar a quantidade de adubo necessaria?",
				senderId: ':self:',
				contentType: 'text',
			},
			{
				id: Math.random().toString(),
				content: "Oi, tudo sim.",
				senderId: 'usuario1',
				contentType: 'text',
			},
			{
				id: Math.random().toString(),
				content: "Pelo que me lembro são 2kg",
				senderId: 'usuario1',
				contentType: 'text',
			},
		],

		usuario2: [
			{
				id: Math.random().toString(),
				content: "Oi, tudo bem?",
				senderId: ':self:',
				contentType: 'text',
			},
			{
				id: Math.random().toString(),
				content: "Queria perguntar a quantidade de adubo necessaria?",
				senderId: ':self:',
				contentType: 'text',
			},
			{
				id: Math.random().toString(),
				content: "Oi, tudo sim.",
				senderId: 'usuario2',
				contentType: 'text',
			},
			{
				id: Math.random().toString(),
				content: "Pelo que me lembro são 2kg",
				senderId: 'usuario2',
				contentType: 'text',
			},
		],

		usuario3: [
			{
				id: Math.random().toString(),
				content: "Oi, tudo bem?",
				senderId: ':self:',
				contentType: 'text',
			},
			{
				id: Math.random().toString(),
				content: "Queria perguntar a quantidade de adubo necessaria?",
				senderId: ':self:',
				contentType: 'text',
			},
			{
				id: Math.random().toString(),
				content: "Oi, tudo sim.",
				senderId: 'usuario3',
				contentType: 'text',
			},
			{
				id: Math.random().toString(),
				content: "Pelo que me lembro são 2kg",
				senderId: 'usuario3',
				contentType: 'text',
			},
		],

		usuario4: [
			{
				id: Math.random().toString(),
				content: "Oi, tudo bem?",
				senderId: ':self:',
				contentType: 'text',
			},
			{
				id: Math.random().toString(),
				content: "Queria perguntar a quantidade de adubo necessaria?",
				senderId: ':self:',
				contentType: 'text',
			},
			{
				id: Math.random().toString(),
				content: "Oi, tudo sim.",
				senderId: 'usuario4',
				contentType: 'text',
			},
			{
				id: Math.random().toString(),
				content: "Pelo que me lembro são 2kg",
				senderId: 'usuario4',
				contentType: 'text',
			},
		],
	})

	return (
		<View style={styles.singleChatSCreenView}>
			<FlatList
				data={data[props.route.params.id]}
				keyExtractor={item => item.id}
				renderItem={ ({item}) => {
					return <MessageItem {...item} />
				}}
				contentContainerStyle={styles.messagesFlatList}
			/>
			<MessageInput
				onSend={setData}
			/>
		</View>
	);
}