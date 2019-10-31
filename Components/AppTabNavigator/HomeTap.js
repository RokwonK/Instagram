import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import CardComponent from '../CardComponent';

export default class HomeTap extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{color:tintColor}}/>
        )
    }

    render() {
        return (
            <Container style={style.container}>
                <Content>
                    <CardComponent />
                </Content>
            </Container>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FFFFFF'
    }
})