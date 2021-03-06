import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Image } from 'react-native';
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { berita } from '../store/action'

 class Home extends React.Component {
  static navigationOptions = {
    title: 'NEWS',
    headerStyle: {
      backgroundColor: '#00BFFF'
    }
}

componentDidMount() {
  axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=14a294ac0b1a487486c876ac93c4bd9c')
  .then(res => { this.props.berita(res.data.articles)})
    // this.setState({Berita: res.data.articles}))
  .catch(err => console.log(err))
}
  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.redux.berita}
          renderItem={({item})=> {
            return (         
              <View style={{
                flexDirection: 'column',
                backgroundColor: '#c6cddf',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 3,
                marginTop: 10,
                padding: 8
              }}>
                  <View>

                    <Text style={styles.teks} onPress={() => 
                        this.props.navigation.navigate('About', {title : item.title, gambar: item.urlToImage, content: item.content })}> 
                        { item.title } </Text>
                  </View>
                  <View style={styles.img}>
                    <Image style={styles.img} source={{uri: item.urlToImage}} style={{ width: 100, height: 100 }} />
                  </View>
              </View>
            )
          }}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 10,
    padding: 10
  },
  header: {
    height: 30
  },
  teks: {
    padding: 5,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: "wrap"
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    padding: 12,
    margin: 6
  },
  kotak: {
    padding: 30,
    color: 'blue'
  }
});


const mapStateToProps = (state) => {
  return {
    redux: state
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({berita}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)