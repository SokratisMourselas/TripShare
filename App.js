import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, Button, TouchableOpacity, ImageBackground, StatusBar, Image} from 'react-native';
import sharing from './assets/sharing.jpg';
import reactLogo from './assets/drawericon.jpg';
import settingsButtonImg from './assets/settings.png';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";

let windowSize = Dimensions.get('window')

class HomeScreen extends Component {

  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigation.toggleDrawer();
  };

  static navigationOptions =  ({ navigation }) => {
    return{
      leftButtonText: "Menu",
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
        >
          <Image source={settingsButtonImg} style={{width: 30, height: 30}}/>
        </TouchableOpacity>
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
      <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "flex-start" }}> 
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={reactLogo}
            style={{ width: 40, height: 30, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
      <ImageBackground imageStyle={{opacity:0.3}} source={sharing} style={{width: '100%', height: '100%'}}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>  
        <StatusBar backgroundColor="white" barStyle="dark-content" />  
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
      </View>
    );
  }
}


class SettingsScreen extends Component {
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigation.toggleDrawer();
  };
  render() {
    
    return (
      <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "flex-start" }}> 
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={reactLogo}
            style={{ width: 40, height: 30, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
      </View>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: 'Settings'
}

class DetailsScreen extends Component {
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigation.toggleDrawer();
  };

  static navigationOptions = {
    title: 'Details Page',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "flex-start" }}> 
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={reactLogo}
            style={{ width: 40, height: 30, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
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
      </View>
    );
  }
}

// const AppNavigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen,
//     Settings: SettingsScreen,
//   },
//   {
//     initialRouteName: 'Home',
//   },
//   {
//     hideStatusBar: true,
//     drawerBackgroundColor: 'rgba(255,255,255,.9)',
//     overlayColor: '#6b52ae',
//     contentOptions: {
//       activeTintColor: '#fff',
//       activeBackgroundColor: '#6b52ae',
//     },
//   }
// );

const AppNavigator = createDrawerNavigator({
  //Drawer Optons and indexing
  Home: { 
    title: "Home",
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: "Home"
    }
  },
  Details: {
    title: "Details",
    screen: DetailsScreen,
    navigationOptions: {
      drawerLabel: "Details"
    }
  },
  Settings: {
    title: "Settings",
    screen: SettingsScreen,
    navigationOptions: {
      drawerLabel: "Settings"
    }
  },
});

const DrawerNavigator = AppNavigator;

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