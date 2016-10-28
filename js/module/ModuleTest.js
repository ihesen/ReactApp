//尝试定义一个module控件（布局）
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    View,
    ToastAndroid,
    Text
} from 'react-native';

//导入定义的js，需要
import LayoutExerciese from '..//LayoutExerciese';
import Api from '..//listloadmore//Api';

class ModuleTest extends Component{

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id:1,
                    title:"标题1",
                    content:"内容1",
                    description:"描述1",
                },
                {
                    id:2,
                    title:"标题2",
                    content:"内容2",
                    description:"描述2",
                },
                {
                    id:3,
                    title:"标题3",
                    content:"内容3",
                    description:"描述3",
                }
            ],
            Api:{}
        };
      }

    render(){
        return (
         <TouchableHighlight onPress={this.onPress}>
            <ScrollView>
                <LayoutExerciese/>
                <LayoutExerciese/>
                <LayoutExerciese/>
                {this.state.items.map(function (item) {
                     return <ItemModule key={item.id} title={item.title} content={item.content} description={item.description}/>
                })}
            </ScrollView>
         </TouchableHighlight>
        );
    }

    onPress(){
          Api.getHomeTaskListDatas()
                      .then((responseData) => {
                          console.log("response:" + JSON.stringify(responseData))
                      })
    }
}

//自定义一个module布局
class ItemModule extends Component{

    render(){
        return (
            <View style={{marginTop: 50}}>
                <Text style={{fontSize: 20, color:'black'}}>{this.props.title}</Text>
                <Text style={{fontSize: 18, color:'red'}}>{this.props.content}</Text>
                <Text style={{fontSize: 14, color:'#333333'}}>{this.props.description}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent("ReactApp" , ()=> ModuleTest)
