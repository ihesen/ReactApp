//Hello World 简单演示
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text
} from 'react-native';

class HelloWorld extends Component{
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>欢迎 正在学习ReactNative...</Text>
                <Text style={styles.instructions}>永远的helloworld</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        container:{
            //填充所有剩余空间，并列布局设置相当于权重
            flex:1,
            //可以决定其子元素沿着主轴的排列方式:flex-start、center、flex-end、space-around以及space-between
            justifyContent:'center',
            //可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式。可选项有：flex-start、center、flex-end以及stretch
            //注意：要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸
            alignItems:'center',
            backgroundColor:'#F5FCFF',
        },
        welcome:{
            fontSize:20,
            textAlign:'center',
            margin: 10,
        },
        instructions:{
            textAlign: 'center',
            color: '#333333',
            marginBottom: 5,
            marginTop: 20,
        },
});

AppRegistry.registerComponent('ReactApp', () => HelloWorld);