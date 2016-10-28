import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View ,TouchableHighlight,TouchableNativeFeedback,ToastAndroid, Image} from 'react-native';

class RequestPage extends Component {
  constructor(props) {
    super(props);
  }

  request(){
      fetch('http://beta-artcloud.ntw.srnpr.com/api/artUserController/getUserAccountInfo', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              zoo: JSON.parse(JSON.stringify({
                  'key':'tesetkey',
                  'token':'48d8f78da3774741919b198b2c1585fc4c7687ca67ba4e10bd4c7a720bddbc37a231425e',
                }),)
            })
          }).then((response) => response.json())
          .then((responseJson) => {
              let status = responseJson.status;
              let error = responseJson.error;
              ToastAndroid.show('请求个人资料页--成功', ToastAndroid.SHORT);
              console.log('geekstatepic:' + JSON.stringify(responseJson));
              })
          .catch((error) => {
            ToastAndroid.show('请求个人资料页--失败', ToastAndroid.SHORT);
            console.log(error);
          })
  }

  render() {
    return (
      <View style={{padding: 10}}>
            <TouchableHighlight onPress={this.request}>
                <Text>按钮点击One</Text>
            </TouchableHighlight>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactApp', () => RequestPage);