import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Toolbar extends React.Component {
    constructor() {
        super();
        this.state = {
            search: false
        }
    }


    render() {
        search = () => {
            this.state.search === false ?
                this.setState({ search: true })
                :
                this.setState({ search: false })
        }

        return (
            <View>
                <View style={{ height: 70, padding: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'yellow' }}>
                    <View style={{ flex: 1 }}>
                        {this.state.search === false ?
                            <Icon name="bars" size={30} color="#900" onPress={() => this.props.navigation.openDrawer()} />

                            :

                            <Icon name="chevron-left" size={30} color="#900" onPress={() => this.setState({ search: false })} />
                        }
                    </View>

                    <View style={{ flex: 6 }}>
                        {this.state.search === false ?
                            <Text>Home</Text>
                            :
                            <TextInput
                                placeholder="search"
                            />
                        }

                    </View>

                    <View style={{ flex: 1 }}>
                        <Icon name="search" size={30} color="#900" onPress={() => search()} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Icon name="bell" size={30} color="#900" />
                    </View>
                </View>
            </View >
        )

    }
}