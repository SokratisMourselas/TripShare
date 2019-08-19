import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, Button, Alert, ImageBackground} from 'react-native';
import reactLogo from './assets/sharing.jpg';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";

let windowSize = Dimensions.get('window')

class HomeScreen extends Component {

  static navigationOptions =  ({ navigation }) => {
    return{
      leftButtonText: "Menu",
      headerRight: (
        <Button
          onPress={() => navigation.navigate('Settings')}
          title="Settings"
          style = {styles.button}
        />
      ),
      title: "Home"
    }
  };

  constructor(props) {
    super(props);
    this.state = { username: '',
                    password:'' };
  }

  onPressSignIn = () => {
    // Alert.alert('Signing in...');
    this.props.navigation.navigate('Details');
  }

  render() {
    return (
      <ImageBackground imageStyle={{opacity:0.3}} source={reactLogo} style={{width: '100%', height: '100%'}}>
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

          <Button
          style={styles.button}
          onPress={this.onPressSignIn}
          title="Sign In"
          color="blue">
          </Button>
          </View>
      </ImageBackground>
    );
  }
}


class SettingsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: 'Settings'
}

class DetailsScreen extends Component {

  static navigationOptions = {
    title: 'Details Page',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Home',
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);

const DrawerNavigator = createDrawerNavigator({
  AppNavigator
});

export default createAppContainer(DrawerNavigator);



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
    borderRadius: 15,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 8,
  },
  button: {
  }
});