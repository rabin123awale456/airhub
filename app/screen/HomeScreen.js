import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Container from '../component/Container';
import SearchBar from '../component/seacrhBar';
import Cards from '../component/Card';
import Toolbar from '../component/Toolbar';
export default class HomeScreen extends React.Component {

    render() {
        return (

            <View style={{ flex: 1 }}>

                <Toolbar navigation={this.props.navigation} />
                <Container>
                    <ScrollView horizontal={true}>
                        <Cards>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('About')} >
                                <Image
                                    style={{ height: 100, width: 100 }}
                                    source={require('./../images/ass.png')}
                                />
                                <Text>clickme</Text>
                            </TouchableOpacity>

                        </Cards>
                        <Cards />
                        <Cards />
                    </ScrollView>

                </Container >
            </View>

        )
    }
}