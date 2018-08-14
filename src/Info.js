import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './styles/mainStyle';

export default class Info extends Component {

  render() {
    if (this.props.error) {
      return(
        <View style={styles.container}>
          <Text>Error: {this.props.message}</Text>
        </View>
      );
    } else {
      return(
        <View style={styles.container}>
          <Text>{this.props.message}</Text>
        </View>
      );
    }
  }
}