import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';

export default class SuperHero extends Component {
    render() {
        return (
            <View>
                <Text>Created Empty SuperHero Application</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('SuperHero', () => SuperHero);
