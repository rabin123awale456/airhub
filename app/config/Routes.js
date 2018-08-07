import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import AboutScreen from '../screen/AboutScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';



const stackNavigator = createStackNavigator({
    Home: HomeScreen,
    About: AboutScreen,
})




const ButtomTab = createMaterialBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon size={30} name='home' color={tintColor} />
            ),

            barStyle: { backgroundColor: 'yellow' },

        }
    },
    About: {
        screen: AboutScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon size={30} name='home' color={tintColor} />
            ),

            barStyle: { backgroundColor: 'blue' },

        }
    },
    Setting: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon size={30} name='home' color={tintColor} />
            ),

            barStyle: { backgroundColor: 'red' },

        }
    },
}, {
        shifting: true,
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        barStyle: { backgroundColor: 'white' },
    })

const Drawer = createDrawerNavigator({
    Tab: ButtomTab,
    Home: stackNavigator,
    About: AboutScreen,
    Setting: HomeScreen
}, {
        initialRouteName: 'Tab',
        drawerWidth: 250
    })


export default createStackNavigator({
    Root: Drawer,

}, {
        headerMode: () => null,

    })