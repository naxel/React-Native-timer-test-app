import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react'

import NavBar from '../components/NavBar';
import Timer from '../components/Timer'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <NavBar
          title="Home"
          onPress={()=>{this.props.navigation.navigate('DrawerOpen');}}
        />

        <Image style={styles.content} source={require('../../assets/bg.jpg')}>

          <Timer showButtons={true}/>

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
