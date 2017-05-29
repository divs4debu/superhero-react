import React, {Component} from 'react'
import {View, StatusBar } from 'react-native';
import blend from '../../libs/Utils/Color/blend';

const Home = class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor={blend(this.props.color, -.2)}
                    barStyle="light-content"
                />
            </View>
        )
    }
};
export default Home;
