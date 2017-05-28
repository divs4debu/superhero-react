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
                <Home color = '#ababab'/>
            </View>
        );
    }
}

AppRegistry.registerComponent('SuperHero', () => SuperHero);
