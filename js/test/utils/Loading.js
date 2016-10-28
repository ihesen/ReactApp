/**
 * Created by edagarli on 16/3/21.
 * https://github.com/edagarli
 */
"use strict";

import React, { Component } from 'react';

import {
       AppRegistry,
       ActivityIndicatorIOS,
       StyleSheet,
       View,
} from 'react-native';


export default class Loading extends Component{
    render() {
            return (
                <View style={[styles.container, styles.centerText]}>
                    <ActivityIndicatorIOS
                        animating={this.props.isLoading}
                        style={styles.spinner}/>
                </View>

            )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "column",
        justifyContent: "center",
    },
    centerText: {
        alignItems: "center",
    },
    spinner: {
        width: 50,
    }
});

AppRegistry.registerComponent('Loading', ()=> Loading);
