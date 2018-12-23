import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  Platform,
  View,
  Alert} from 'react-native';
import { TOKEN_SAMUCA } from 'react-native-dotenv'
import api from './services/api'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  getEsteira = async function(){
    const response = await api.post('/saude/esteira/get').catch( (err) => {console.log(err)} );
    console.log(response.data);
  };
  
  async componentDidMount() {
    this.getEsteira();
  };

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React treste!</Text>
        <Text style={styles.instructions}>Token que utilizaremos: {TOKEN_SAMUCA}</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
