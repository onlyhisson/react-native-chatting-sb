import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {sendbirdLogin} from '../actions';
//import {Input, Divider, Button} from '../components';
import {Input, Divider, Button} from 'react-native-elements';
import {CommonActions} from '@react-navigation/native';

class Login extends Component {
  static navigationOptions = {
    title: 'LOGIN',
  };

  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      nickname: '',
    };
  }

  UNSAFE_componentWillReceiveProps(props) {
    const {user, error} = props;
    if (user) {
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{name: 'Menu'}],
      });
      this.setState({userId: '', nickname: '', profileUrl: ''}, () => {
        this.props.navigation.dispatch(resetAction);
        //this.props.navigation.navigate('Menu');
      });
    }
  }

  _userIdChanged = userId => {
    this.setState({userId});
  };

  _nicknameChanged = nickname => {
    this.setState({nickname});
  };

  _onButtonPress = () => {
    const {userId, nickname} = this.state;
    this.props.sendbirdLogin({userId, nickname});
  };

  render() {
    return (
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <View style={styles.containerStyle}>
          <Input
            label="User ID"
            labelStyle={styles.containerStyle}
            placeholder=""
            onChangeText={value => this._userIdChanged(value)}
          />
        </View>
        <View style={styles.containerStyle}>
          <Input
            label="Nickname"
            labelStyle={styles.containerStyle}
            placeholder=""
            onChangeText={value => this._nicknameChanged(value)}
          />
        </View>
        <View style={styles.containerStyle2}>
          <Button
            buttonStyle={{backgroundColor: '#2096f3'}}
            title="Connect"
            onPress={this._onButtonPress}
          />
        </View>
        <View style={styles.containerStyle2}>
          {this.props.error ? (
            <Text style={{color: 'red'}}>{this.props.error}</Text>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    marginTop: 10,
  },
  containerStyle2: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
};

function mapStateToProps({login}) {
  const {error, user} = login;
  return {error, user};
}

export default connect(
  mapStateToProps,
  {sendbirdLogin},
)(Login);
