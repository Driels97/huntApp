import React, { Component , useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import api from "../services/Api";

export default class Main extends Component{
    state = {
        docs: [],
        page: 1,
        productInfo: {}
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo} = response.data;

        this.setState({docs: [...this.state.docs, ...docs], productInfo, page});
    };

    loadMore = async () => {
        const { page, productInfo } = this.state;

        if(page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };

    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate('Product', { product: item });}}
                style={styles.productButton}>
                <Text style={styles.productButtonText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    );

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.docs}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    onEndThreshold={0.1}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
        backgroundColor: '#fafafa'
   },
   list: {
       padding: 20
   },
   productContainer: {
       backgroundColor: '#ffffff',
       borderWidth: 1,
       borderColor: '#dddddd',
       borderRadius: 5,
       padding: 20,
       marginBottom: 20
   },
   productTitle: {
       fontSize: 18,
       fontWeight: 'bold',
       color: '#333333'
   },
   productDescription: {
       fontSize: 16,
       color: '#999999',
       marginTop: 5,
       lineHeight: 24
   },
   productButton: {
       height: 42,
       borderRadius: 5,
       borderWidth: 2,
       borderColor: '#da552f',
       backgroundColor: 'transparent',
       justifyContent: 'center',
       marginTop: 10
   },
   productButtonText:{
       textAlign:'center',
       fontSize: 16,
       color: '#da552f',
       fontWeight: 'bold'
   }
});