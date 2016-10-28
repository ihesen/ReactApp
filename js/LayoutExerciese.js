//尝试布局AMBer v1.1.4 首页销售任务列表item布局：
import React, { Component,PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
    View,
    Text
} from 'react-native';

export default class LayoutExerciese extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        imageUrl:PropTypes.string.isRequired,

        goodsTittle:PropTypes.string.isRequired,
        minGoodsPrice:PropTypes.string.isRequired,

        productCount:PropTypes.number.isRequired,
        partakeNumber:PropTypes.number.isRequired,
        singleCommision:PropTypes.string.isRequired,
        restTime:PropTypes.number.isRequired,
      }

    render() {
        return (
            //numberOfLines:控制Text最多显示几行
            <View style={[{backgroundColor:'white'}]}>
                <Text numberOfLines={2} style={[styles.task_title, {marginBottom:15}]}>{this.props.title}</Text>
                <View style={[styles.row,{marginLeft:10, marginRight:10}, {backgroundColor:'#f8f8f8'}]}>
                    <Image style={styles.productIcon} source={{uri:this.props.imageUrl}}/>
                    <View style={[styles.flex_1, {marginLeft: 10}]}>
                        <Text style={[styles.flex_1, styles.color_555555]}>{this.props.goodsTittle}</Text>
                        <View style={[styles.row]}>
                            <Text style={[styles.flex_1, styles.color_555555, {fontSize:12}]}>￥{this.props.minGoodsPrice}</Text>
                            <Text style={[styles.flex_1, styles.text_right, styles.color_555555, {fontSize: 14}]}>库存：{this.props.productCount}件 </Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.row,{marginLeft:10, marginRight:10}, styles.flex_4, {marginTop:15}]}>
                    <Text style={[styles.flex_1]}>参与 {this.props.partakeNumber} 人</Text>
                    <Text style={[styles.flex_1]}>剩余 {this.props.restTime} 天</Text>
                    <Text style={[styles.flex_2, styles.text_right, {color:'#cba162'}]}>咖币：{this.props.singleCommision}</Text>
                </View>
                <View style={{marginTop:10, height:10, backgroundColor:'#f2f2f2'}}/>
            </View>
        );
    }
}

const styles = StyleSheet.style=({
    row:{
        flexDirection:'row',
    },
    productIcon:{
        width:67,
        height:67,
    },
    flex_1:{
        flex:1,
    },
    flex_2:{
        flex:2,
    },
    task_title:{
        fontSize:16,
        color:'#333333',
        marginTop:10,
        marginLeft:10,
        marginRight:10
    },
    text_right:{
        textAlign:'right',
    },
    color_555555:{
        color:'#555555'
    },

});

AppRegistry.registerComponent('ReactApp', ()=> LayoutExerciese);