import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {CommonActions} from '@react-navigation/native';
import {sendbirdLogout, initMenu} from '../actions';
import {Button} from 'react-native-elements';

class Menu extends Component {
  static navigationOptions = {
    title: 'MENU',
  };

  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount() {
    this.props.initMenu();
  }

  UNSAFE_componentWillReceiveProps(props) {
    const {isDisconnected} = props;
    if (isDisconnected) {
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
      this.setState({isLoading: false}, () => {
        this.props.navigation.dispatch(resetAction);
      });
    }
  }

  _onProfileButtonPress = () => {
    // TODO: Profile screen
    this.props.navigation.navigate('Profile');
  };

  _onOpenChannelPress = () => {
    // TODO: OpenChannel screen
  };

  _onGroupChannelPress = () => {
    // TODO: GroupChannel screen
  };

  _onDisconnectButtonPress = () => {
    this.props.sendbirdLogout();
  };

  render() {
    return (
      <View style={styles.containerViewStyle}>
        <Button
          containerViewStyle={styles.menuViewStyle}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          icon={{
            name: 'user',
            type: 'font-awesome',
            color: '#6e5baa',
            size: 16,
          }}
          title="Profile"
          onPress={this._onProfileButtonPress}
        />
        <Button
          containerViewStyle={styles.menuViewStyle}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          icon={{
            name: 'slack',
            type: 'font-awesome',
            color: '#6e5baa',
            size: 16,
          }}
          title="Open Channel"
          onPress={this._onOpenChannelPress}
        />
        <Button
          containerViewStyle={styles.menuViewStyle}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          icon={{
            name: 'users',
            type: 'font-awesome',
            color: '#6e5baa',
            size: 16,
          }}
          title="Group Channel"
          onPress={this._onGroupChannelPress}
        />
        <Button
          containerViewStyle={styles.menuViewStyle}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          icon={{
            name: 'sign-out',
            type: 'font-awesome',
            color: '#6e5baa',
            size: 16,
          }}
          title="Disconnect"
          onPress={this._onDisconnectButtonPress}
        />
      </View>
    );
  }
}

const styles = {
  containerViewStyle: {
    backgroundColor: '#fff',
    flex: 1,
  },
  menuViewStyle: {
    marginHorizontal: 0,
  },
  buttonStyle: {
    marginVertical: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingLeft: 14,
  },
  titleStyle: {
    color: '#6e5baa',
  },
};

function mapStateToProps({menu}) {
  const {isDisconnected} = menu;
  return {isDisconnected};
};

export default connect(
  mapStateToProps,
  {sendbirdLogout, initMenu},
)(Menu);
