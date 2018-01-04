import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('./2-2-globe-free-download-png-thumb.png')}/>
        <Image style={styles.img} source={{uri: 'http://www.freepngimg.com/download/globe/2-2-globe-free-download-png.png'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 50,
  },
});
