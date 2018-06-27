import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Cart from '../components/Cart.basic.example'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Cart'
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
        * content, we just wanted to provide you with some helpful links */}
        <Cart />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
})
