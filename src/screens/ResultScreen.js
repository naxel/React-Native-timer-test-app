import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react'

import NavBar from '../components/NavBar'
import Timer from '../components/Timer'

export default class ResultScreen extends React.Component {
  static navigationOptions = {
    title: 'Result',
  };

  render() {
    return (
      <View style={styles.container}>
        <NavBar
          title="Result"
          onPress={()=>{this.props.navigation.navigate('DrawerOpen');}}
        />

        <Image style={styles.content} source={require('../../assets/bg.jpg')}>

          <Timer showButtons={false}/>

        </Image>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 80,
  },
});
