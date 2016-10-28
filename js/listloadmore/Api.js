
//请求实体，首页任务列表接口
//{
//    "sortType": "1",
//    "taskType": "2",
//    "pageOption": {
//        "itemCount": 5,
//        "pageNum": 0
//    },
//    "zoo": {
//        "key": "tesetkey",
//        "token": "f3943dcc6d7c432fb56fcfce875b344e0281ed008f6247439ba4becf2c80b7d58b8e9269"
//    }
//}
//
//import React, { Component } from 'react';
//import { AppRegistry, TouchableHighlight,TouchableNativeFeedback,ToastAndroid, Animated, Image} from 'react-native';
//
let BaseURL = "http://beta-artcloud.ntw.srnpr.com/api/artTaskController/taskHomePage";
function fetchData(){
    return fetch(BaseURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            zoo: {
                key: 'tesetkey',
                token: '48d8f78da3774741919b198b2c1585fc4c7687ca67ba4e10bd4c7a720bddbc37a231425e',
            },
            sortType:'1',
            taskType:'2',
            pageOption:{
                itemCount:5,
                pageNum:0,
            }
        })
    }).then((response) => response.json())
}

module.exports = {
    getHomeTaskListDatas: function(): Object {
        return fetchData();
    }
};