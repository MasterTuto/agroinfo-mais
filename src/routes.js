import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'; 

import Sell from './screens/Sell';
import Buy from './screens/Buy';
import Home from './screens/Home';
import Chat from './screens/Chat';
import Info from './screens/Info';


const Tab = createMaterialBottomTabNavigator();


export default function Routes() {
	return (
		<NavigationContainer>
			<StatusBar style="light" translucent={false}/>
			<Tab.Navigator
				initialRouteName="Home"
				barStyle={ { backgroundColor: 'white'} }
			>

				<Tab.Screen
					name="Sell"
					component={Sell}
					options={{
						title: "Vender",
						tabBarIcon: (focused, color) => {
							return <MaterialIcons name="store" size={24} color="black" />
						}
					}}
				/>

				<Tab.Screen
					name="Buy"
					component={Buy}
					options={{
						title: "Comprar",
						tabBarIcon: (focused, color) => {
							return <MaterialIcons name="shopping-cart" size={24} color="black" />
						}
					}}
				/>
				
				<Tab.Screen
					name="Home"
					component={Home}
					options={{
						title: "Página Inicial",
						tabBarIcon: (focused, color) => {
							return <MaterialIcons name="home" size={24} /*color="#9EC33B"*/ color="black" />
						}
					}}
				/>
				
				<Tab.Screen
					name="Chat"
					component={Chat}
					options={{
						tabBarIcon: (focused, color) => {
							return <MaterialIcons name="chat" size={24} color="black" />
						}
					}}
				/>
				
				<Tab.Screen
					name="Info"
					component={Info}
					options={{
						title: 'Informações',
						tabBarIcon: (focused, color) => {
							return <MaterialIcons name="info" size={24} color="black" />
						}
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}