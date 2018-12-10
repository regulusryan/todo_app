import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import MyButton from './button';

// const Header = (props) => <Text>Helo world</Text>; (1)
// const Header = (props) => <Text>{props.textIwant}</Text>; (2)
class Header extends React.Component { // (3)
    // So we can use the component functionality
    // this will run first
    constructor(props) { // set it up
        super(props); // run it
        this.textIwant = props.textIwant; //get the data from the parent component
        this.state = { //lives inside any react component, each component has it own unique state
            number: 0
        };

        // just follow
        this.addNumberWhenPressed = this.addNumberWhenPressed.bind(this);
        // react component has the ability to run this when pressed 
    }

    componentDidUpdate() {
        console.log(this.state.number);
    }

    //trigger update of state
    addNumberWhenPressed() {
        // return function () {
        const prevNumber = this.state.number;
        this.setState({
            number: prevNumber + 1
        });
        // };
    }

    // (4)


    render() {
        return (
            <View>
                {/* <Text>hello world</Text> */}
                {/* <Text>{this.textIwant}</Text> */}
                <Text onPress={this.addNumberWhenPressed}>{this.textIwant}</Text>
            </View>
        );
    }
}
export default Header;
