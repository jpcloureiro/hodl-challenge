import React, {Component} from 'react';
import io from 'socket.io-client';
import Hodl from './Hodl';

export default class WS extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isConnected: false,
      isLoaded: false,
      items: null
    };
  }

  componentDidMount() {
    
    const ws = io('http://ec2-54-229-199-201.eu-west-1.compute.amazonaws.com:2345/', {
      transports: ['websocket'],
    });

    ws.on('error', (err) => {
      this.setState({
        error: err
      });
    });

    ws.on('connect', ()=> {
      this.setState({
        isConnected: true
      });
    });
    
    ws.on('data', (data) => {
      this.setState({
        items: data,
        isLoaded: true
      });
    });

    ws.on('disconnect', () => {
      this.setState({
        isConnected: false
      });
    }
    );
  }

  render() {
    return (
      <Hodl 
        error = {this.state.error}
        isConnected = {this.state.isConnected}
        isLoaded = {this.state.isLoaded}
        items = {this.state.items}
      />
    );
  }
}