import React, {Component} from 'react'
import {View, StatusBar } from 'react-native';
import primaryDark from "../../libs/Utils/Color/primaryDark";

const Home = class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor={primaryDark(this.props.color)}
                    barStyle="light-content"
                />
            </View>
        )
    }
};
export default Home;
