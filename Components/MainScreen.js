import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { Icon } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import HomeTab from './AppTabNavigator/HomeTap';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

const AppTabNavigator = createMaterialTopTabNavigator ({
    HomeTab: { screen: HomeTab},
    SearchTab: { screen: SearchTab},
    AddMediaTab: {screen: AddMediaTab},
    LikesTab: {screen: LikesTab},
    ProfileTab: { screen: ProfileTab}
},
{
    initialRouteName: 'HomeTab', //시작페이지 설정
    animationEnabled: true, //슬라이드처럼 넘어가게
    swipeEnabled: true,     //이전, 다음 컨텐츠로 이동
    tabBarPosition: 'bottom', //탭바의 위치
    tabBarOptions: {            //...Platform.select(해당기기 플랫폼이란 뜻)
        style: {                //그냥 두 플랫폼합쳐 하나로 해도 됨
            ...Platform.select({
                ios:{
                    backgroundColor:'#FFFFFF'
                },
                android:{
                    backgroundColor:'#FFFFFF'
                }
            })
        },
        iconStyle:{ height: 30},    //아이콘 크기
        activeTintColor: '#000000', //사용중인 탭 색깔
        inactiveTintColor: '#D1CECE',   //비사용중인 탭 색깔
        upperCaseLabel: false,          //대문자 라벨 사용할것인지
        showLabel: false,               //라벨 사용할 것인지
        showIcon: true                  //ICON보일 것인지
    }
});

const AppTabContaint = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
    static navigationOptions = {
        header : null
    }
    
    render() {
        return (
            <AppTabContaint/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});