import React, { Component } from 'react';
import { View, Image, Text, StyleSheet} from 'react-native';
import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base'

export default class CardComponent extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text>CardComponent</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})