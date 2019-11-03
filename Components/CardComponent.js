import React, { Component } from 'react';
import { View, Image, Text, StyleSheet} from 'react-native';
import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base'

export default class CardComponent extends Component {
    render() {
        const { data } = this.props;
        const { image } = JSON.parse(data.json_metadata);
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: `https://steemitimages.com/u/${data.author}/avatar` }}/>
                        <Body>
                            <Text>{data.author}</Text>
                            <Text note>{new Date(data.created).toDateString()}</Text>
                        </Body>
                    </Left>
                    <Right>
                        <Button transparent >
                            <Icon name='ios-refresh' style={{color:'#000000'}} />
                        </Button>
                    </Right>
                </CardItem>


                {
                    image && image.length ?
                    <CardItem cardBody>
                        <Image
                            source={{uri:image[0]}}
                            style={{height:200, width:null, flex:1}} />
                    </CardItem> : null
                }

                <CardItem>
                    <Text style={{fontWeight:'900'}}>{ data.title } likes</Text>
                </CardItem>
                <CardItem>
                    <Text>{ data.body.replace(/\n/g,' ').slice(0,200) } likes</Text>
                </CardItem>

                <CardItem style={{height:30}}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart" stlye={{color:'#000000'}}/>
                            <Text>{ data.active_votes.length }</Text>
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles" stlye={{color:'#000000'}}/>
                            <Text>{ data.children }</Text>
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send" stlye={{color:'#000000'}}/>
                        </Button>
                    </Left>
                    <Right>
                        <Text>{ data.pending_payout_value }</Text>
                    </Right>
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