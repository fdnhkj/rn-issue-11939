import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  RefreshControl
} from 'react-native';

export default class RnIssue11939 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {isRefreshing1: false, isRefreshing2: false};
  }

  _onRefresh1() {
    this.setState({isRefreshing1: true});
    setTimeout(() => {
      this.setState({isRefreshing1: false});
    }, 2000);
  }

  _onRefresh2() {
    this.setState({isRefreshing2: true});
    setTimeout(() => {
      this.setState({isRefreshing2: false});
    }, 2000);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{padding: 20}}>
      		Text
        </Text>
        <ScrollView
          contentContainerStyle={styles.container}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled
        >
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing1}
                onRefresh={this._onRefresh1.bind(this)}
              />
            }>
              <Text style={styles.card}>First child</Text>
          </ScrollView>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing2}
                onRefresh={this._onRefresh2.bind(this)}
              />
            }>
              <Text style={styles.card}>Second child</Text>
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('window').width,
    textAlign: 'center'
  },
  container: {
    borderWidth: 1,
    borderColor: 'red'
  },
  refreshControl: {
    backgroundColor: 'red'
  }
});

AppRegistry.registerComponent('RnIssue11939', () => RnIssue11939);
