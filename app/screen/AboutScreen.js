import React from 'react';
import { View, Text, ScrollView, Slider } from 'react-native';

export default class HomeScreen extends React.Component {


    render() {
        return (
            <View>
                <Slider
                    onSlidingComplete={() => this.onSlidingComplete()}
                    maximumValue={100}
                    style={{ height: 100, width: 100 }}
                />
            </View>
        )
    }
}