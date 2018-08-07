import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


const SearchBar = () => (
    <TextInput
        style={styles.SearchBars}
        placeholder="Search"
    />
)
const styles = StyleSheet.create({
    SearchBars: {
        width: '90%',

        elevation: 10,
    }
})
export default SearchBar;