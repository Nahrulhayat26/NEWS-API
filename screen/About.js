import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Image } from 'react-native';
import axios from 'axios'

export default class About extends React.Component {
  static navigationOptions = {
    title: 'NEWS',
    headerStyle: {
      backgroundColor: '#00BFFF'
    }
}

  render() {
    return (
       <View>
            <View style={styles.container}>
            <View style={styles.teks}></View>
                <Text style={styles.inputBox} style={styles.teks}>{this.props.navigation.getParam('title')}</Text>
            </View>
            <View style={styles.img}>
                <Image style={styles.img} source={{uri: this.props.navigation.getParam('gambar')}} style={{ width: 100, height: 100 }} />
            </View>
            <View style={styles.container}>
                <Text style={styles.teks}>{this.props.navigation.getParam('content')}</Text>
            </View>
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
    marginTop: 10,
    backgroundColor: '#F5FCFF'
  },
  teks: {
    padding: 30,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: "wrap"
  },
  header: {
    height: 1
  },
  inputBox: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    padding: 12,
    margin: 6
  },
  img: {
    padding: 60,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: "wrap"
  }
});