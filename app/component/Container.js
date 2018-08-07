import React from 'react';
import { View, StyleSheet } from "react-native";

const conatiner = (props) => (

    <View style={styles.container} >
        {props.children}
    </View >
)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'grey'
    }
})
export default conatiner;

