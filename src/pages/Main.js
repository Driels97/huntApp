import React, { Component , useState } from 'react';
import { View, Text } from 'react-native';
import api from "../services/Api";

export default class Main extends Component{
    state = {
        docs: []
    };
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        const { docs } = response.data;

        this.setState({docs});
    };

    render() {
        return (
            <View>
                <Text>Bem vind@ à main.</Text>
                {this.state.docs.map((item) => (
                    <Text key={item._id}>{item.title}</Text>
                ))}
            </View>
        );
    }
}