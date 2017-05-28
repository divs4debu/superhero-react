import React, {Component} from 'react'
import {View, StatusBar } from 'react-native';

const Home = class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor={this.props.color}
                    barStyle="light-content"
                />
            </View>
        )
    }
};
export default Home;
