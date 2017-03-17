import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

class NavBar extends React.Component {
  render() {
    let button = (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Image style={styles.icon} source={require('../../assets/menu.png')}/>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>

        <View style={styles.leftBlock}>
          {button}

          <View style={styles.titleBlock}>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
        </View>

      </View>
    )
  }
}

NavBar.propTypes = {
  title: React.PropTypes.string,
  onPress: React.PropTypes.func
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(203,203,203,0.31)',
    height: 80,
    justifyContent: 'space-between',
  },
  leftBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    height: 80,
    paddingTop: 34,
    paddingHorizontal: 19,
  },
  icon: {
    width: 20,
    height: 16,
  },
  title: {
    marginLeft: 20,
    fontSize: 26,
    color: 'black',
  },
  titleBlock: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
