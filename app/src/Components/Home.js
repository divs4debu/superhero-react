import React, {Component} from 'react'
import {View, StatusBar, ToolbarAndroid, StyleSheet, Text} from 'react-native';
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
                <ToolbarAndroid
                    style={styles.toolbar}
                    title='SuperHero'
                    backgroundColor={this.props.color}
                    titleColor='white'
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    toolbar: {
        height: 50,
    },
});
export default Home;
