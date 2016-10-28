//布局简单演示：
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text
} from 'react-native';

class LayoutExerciese1 extends Component{

    render() {
        return (
            //flexDirection设置父容器，线性方向，默认为垂直排列（flexDirection），横向排列（row）
            <View style={{flex:1}}>
                <View style={styles.topStyle}>
                    <Text style={styles.textStyle}>我占据屏幕 1/4 我的背景颜色是红色</Text>
                </View>
                <View style={styles.centerStyle}>
                    <Text style={[styles.textStyle, styles.fontSize_28]}>我占据屏幕 1/2 我的背景颜色是红色</Text>
                </View>
                <View style={styles.bottomStyle}>
                    <Text style={styles.textStyle}>我占据屏幕 1/4 我的背景颜色是黑色</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.style=({
    topStyle:{
        flex:2,
        backgroundColor:'red',
        justifyContent:'center',
    },
    centerStyle:{
        flex:4,
        backgroundColor:'blue',
        justifyContent:'center',
    },
    bottomStyle:{
        flex:2,
        backgroundColor:'black',
        justifyContent:'center',
    },
    textStyle:{
        textAlign: 'center',
        fontSize: 18,
        color:'white',
        justifyContent:'center',
    },
    fontSize_28:{
        fontSize:28,
    }
});

AppRegistry.registerComponent('ReactApp', ()=> LayoutExerciese1);