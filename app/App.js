/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
    ScrollView
} from 'react-native';
import Navigator from './config/Routes';

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor='red'
                />
                <View style={{ flex: 1 }}>
                    <Navigator />
                </View>

            </View>
        );
    }
}

