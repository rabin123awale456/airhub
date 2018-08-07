import React from 'react';
import { View, StyleSheet } from "react-native";

const Cards = (props) => (

    <View style={styles.container} >
        {props.children}
    </View >
)
const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 150,
        backgroundColor: '#fafafa',
        elevation: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'

    }
})
export default Cards;

