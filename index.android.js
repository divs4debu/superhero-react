import React, {Component} from 'react';
import {
    AppRegistry,
    View
} from 'react-native';

import Home from './app/src/Components/Home';

export default class SuperHero extends Component {
    render() {
        return (
            <View>
                <Home color = '#9C27B0'/>
            </View>
        );
    }
}

AppRegistry.registerComponent('SuperHero', () => SuperHero);
