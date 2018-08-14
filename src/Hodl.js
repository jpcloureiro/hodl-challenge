import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import Info from './Info';
import styles from './styles/mainStyle';

export default class Hodl extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    const {
      error,
      isConnected,
      isLoaded,
      items
    } = this.props;

    if (error) {
      return (<Info error={true} message={error.message}/>); 

    } else if (!isConnected) {
      return (<Info error={false} message="Connecting..."/>); 
      
    } else if (!isLoaded && !items) {
      return (<Info error={false} message="Getting Info..."/>);

    } else {
      return (
        <View style={styles.list}>
        <FlatList
          data={items}
          renderItem={({ item }) => 
            <View>
              <Text style={styles.item}>Name: {item.name}</Text> 
              <Text>Age: {item.age}</Text>
            </View>
          }
          keyExtractor={item => item.name}
        />
        </View>
      );  
    }
  }
}