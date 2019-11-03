import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base';
import CardComponent from '../CardComponent';

export default class HomeTap extends Component {

    state = {
        feeds: [],
        followings: []
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{color:tintColor}}/>
        )  
    }

    fetchFollowing() {
        const data = {
            id: 2,
            jsonrpc: "2.0",
            method: "call",
            params: [
                "follow_api",
                "get_following",
                ["anpigon", "", "blog", 10]
            ]
        };

        return fetch('https://api.steemit.com',
        {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => res.result.map( ({following}) => following))
    }

    fetchFeeds() {
        const data = {
            id: 1,
            jsonrpc: "2.0",
            method: "call",
            params: [
                "database_api",
                "get_discussions_by_created",
                [{tag:"kr", limit: 10}]
            ]
        }
        return fetch('https://api.steemit.com', {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => res.result)
    }

    componentWillMount() {
        this.fetchFeeds().then(feeds => {
            this.setState({
                feeds   // == feeds:feeds
            })
        });

        this.fetchFollowing().then(followings => {
            this.setState({
                followings
            })
        });
    }

    render() {  //Scroll View 말 그대로 스크롤 할 수 있게 해줌
        return (
            <Container style={style.container}>
                <Header style={{backgroundColor:"#FFFFFF"}}>
                    <Left><Icon name="ios-camera" style={{paddingLeft:10}} /></Left>
                    <Body><Text style={{fontSize:18, fontWeight:'900'}}>Instagram</Text></Body>
                    <Right><Icon name="ios-send" style={{ paddingRight:10}}/></Right>
                </Header>
                <Content>
                    <View style={{height: 100}}>

                        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center',paddingHorizontal:7}}>
                            <Text style={{fontWeight:'bold'}}>Stroies</Text>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Icon name="md-play" style={{fontSize:14}}/>
                                <Text style={{fontWeight:'bold'}}>Watch All</Text>
                            </View>
                        </View>

                        <View style={{ flex: 3}}>
                            <ScrollView 
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: 'center',
                                    paddingStart: 5,
                                    paddingEnd: 5
                                }}> 
                                {
                                    this.state.followings.map(following => 
                                        <Thumbnail
                                            style={{ marginHorizontal: 5, borderColor: 'blue', borderWidth: 2}}
                                            source={{ uri: `https://steemitimages.com/u/${following}/avatar` }}/>)
                                }
                            </ScrollView>
                        </View>

                    </View>
                    {
                        this.state.feeds.map(feed => <CardComponent data={ feed }/>)
                    }
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