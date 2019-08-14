import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';

let windowSize = Dimensions.get('window')

export default class HelloWorldApp extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '',
                    password:'' };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.bigBlue}>Welcome to TripShare!</Text>
        <Text style={styles.blue}>Before we continue, please sign in:</Text>
        <TextInput
        style={styles.input}
        onChangeText={(username) => this.setState({username})}
        value={this.state.username}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
        placeholder="Password"
        secureTextEntry
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  blue: {
    color: 'blue',
    margin: 10,
    textAlign: 'center'
  },
  input: {
    width: windowSize.width - 70,
    color: '#555555',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    borderColor: '#6E5BAA',
    borderWidth: 1,
    borderRadius: 2,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
  }
});