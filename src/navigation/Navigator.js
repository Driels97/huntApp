import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import Main from '../pages/Main';
import Product from "../pages/Product";

const stackNav =  createStackNavigator({
    Home: {
        screen: Main,
        navigationOptions: {
            headerTitle: 'JSHunt',
            headerTitleStyle: {
                textAlign: 'center',
                flex: 1
            }
        }
    },
    Product: {
        screen: Product,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.product.title,
            headerTitleStyle: {
                textAlign: 'center',
                flex: 1
            },
            headerRight: (<View/>)
        })
    }
},
    {
defaultNavigationOptions: {
    headerStyle: {
        backgroundColor: '#DA552F'
    },
    headerTintColor: '#FFFFFF'
}
});

export default createAppContainer(stackNav);
