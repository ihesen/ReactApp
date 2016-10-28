//尝试定义一个module控件（布局）
import React, { Component } from 'react';
import {
    AppRegistry,
    ListView,
    StyleSheet,
    View,
    ToastAndroid,
    Text
} from 'react-native';

import Api from '..//listloadmore//Api';
import LayoutExerciese from '..//LayoutExerciese';

class SaleTaskList extends Component{

    constructor(props) {
        super(props);
        this.state={
            taskListView : new ListView.DataSource({rowHasChanged : (r1, r2) => r1 !== r2}),
        };
        this.request();
    }

    render(){
        return (
         <ListView
            dataSource={this.state.taskListView}
            renderRow={(rowData) => this.getRowView(rowData)}
         />
        );
    }

    getRowView(rowData: Object){
       return
            <LayoutExerciese
                title={rowData.title}
                imageUrl={rowData.imageUrl}
                goodsTittle={rowData.goodsInfo.goodsTittle}
                minGoodsPrice={rowData.goodsInfo.minGoodsPrice}
                productCount={rowData.productCount}
                singleCommision={rowData.singleCommision}
                partakeNumber={rowData.partakeNumber}
                restTime={Math.round(rowData.restTime/(1000*60*60*24))}
            />
    }

    request(){
          Api.getHomeTaskListDatas()
              .then((responseData) => {
                  console.log("response:" + JSON.stringify(responseData))
                  this.setState({
                        taskListView : this.state.taskListView.cloneWithRows(responseData.artTaskList)
                  });
              })
    }

}

AppRegistry.registerComponent("ReactApp" , ()=> SaleTaskList)
