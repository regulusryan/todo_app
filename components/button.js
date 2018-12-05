import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const MyButton = (props) => <Button title={props.buttonTextIwant} onPress={props.whenIPress} />;

export default MyButton;

