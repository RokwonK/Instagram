import React, { Component } from 'react';
import { View, Image, Text, StyleSheet} from 'react-native';
import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base'

export default class CardComponent extends Component {
    render() {
        return (
            <Card>

                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: 'https://steemitimages.com/u/anpigon/avatar' }}/>
                        <Body>
                            <Text>so tired</Text>
                            <Text note>Novem 1, 2019</Text>
                        </Body>
                    </Left>
                    <Right>
                        <Button transparent >
                            <Icon name='ios-refresh' style={{color:'#000000'}} />
                        </Button>
                    </Right>
                </CardItem>


                <CardItem cardBody>
                    <Image 
                        source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/18/20/26/boat-164989_1280.jpg'}}
                        style={{height:200, width:null, flex:1}}
                    />
                </CardItem>


                <CardItem style={{height:30}}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart" stlye={{color:'#000000'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles" stlye={{color:'#000000'}}/>
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send" stlye={{color:'#000000'}}/>
                        </Button>
                    </Left>
                </CardItem>


                <CardItem style={{height:20}}>
                    <Text>103 likes</Text>
                </CardItem>


                <CardItem>
                    <Text>
                        <Text style={{fontWeight:'900'}}>tired</Text>
                        react-native start!! very nice~
                    </Text>
                </CardItem>


            </Card>
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