import React, { Component} from 'react';
import { View, Text } from 'react-native';
import api from "../services/Api";

export default class Main extends Component{
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        const { docs } = response.data;

        console.log(docs);
    };

    render() {
        return (
            <View>
                <Text>Bem vind@ à main.</Text>
            </View>
        );
    }
}