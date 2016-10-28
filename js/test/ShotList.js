/**
 * Created by edagarli on 16/3/21.
 * https://github.com/edagarli
 */
import React, { Component } from 'react';

import {
       AppRegistry,
       ListView,
       StyleSheet,
       Text,
       TextInput,
       View,
} from 'react-native';

import Api from './helpers//Api';

import ShotCell from './ShotCell';
import Loading from './utils/Loading';

var resultsCache = {
    dataForQuery: [],
    nextPageNumberForQuery: [],
    totalForQuery: [],
};

var LOADING = {};

class ShotList extends Component{
    constructor(props) {
        super(props);
        this.state = {
           isLoading: false,
           isLoadingTail: false,
           dataSource: new ListView.DataSource({
               rowHasChanged: (row1, row2) => row1 !== row2,
           }),
           queryNumber: 0,
        }
    }

    componentWillMount(){
        this.getShots(this.state.filter);
    }

    getShots(query: string) {
        var cachedResultsForQuery = resultsCache.dataForQuery[query];
        if (cachedResultsForQuery) {
            if (!LOADING[query]) {
                this.setState({
                    dataSource: this.getDataSource(cachedResultsForQuery),
                    isLoading: false
                });
            } else {
                this.setState({isLoading: true});
            }
            return;
        }

        LOADING[query] = true;
        resultsCache.dataForQuery[query] = null;
        this.setState({
            isLoading: true,
            queryNumber: this.state.queryNumber + 1,
            isLoadingTail: false,
        });

        Api.getShotsByType(query, 1)
            .catch((error) => {
                LOADING[query] = false;
                resultsCache.dataForQuery[query] = undefined;

                this.setState({
                    dataSource: this.getDataSource([]),
                    isLoading: false,
                });
            })
            .then((responseData) => {
                console.log("response:" + JSON.stringify(responseData))
                LOADING[query] = false;
                resultsCache.dataForQuery[query] = responseData;
                resultsCache.nextPageNumberForQuery[query] = 2;

                this.setState({
                    isLoading: false,
                    dataSource: this.getDataSource(responseData),
                });
            })
            .done();
    }

    hasMore(){
        var query = "";
        if (!resultsCache.dataForQuery[query]) {
            return true;
        }
        return (
            resultsCache.totalForQuery[query] !==
            resultsCache.dataForQuery[query].length
        );
    }

    onEndReached() {
        var query = "";
        if (!this.hasMore || this.state.isLoadingTail) {
            // We"re already fetching or have all the elements so noop
            return;
        }

        if (LOADING[query]) {
            return;
        }

        LOADING[query] = true;
        this.setState({
            queryNumber: this.state.queryNumber + 1,
            isLoadingTail: true,
        });

        var page = resultsCache.nextPageNumberForQuery[query];
        Api.getShotsByType(query, page)
            .catch((error) => {
                LOADING[query] = false;
                this.setState({
                    isLoadingTail: false,
                });
            })
            .then((responseData) => {
                var shotsForQuery = resultsCache.dataForQuery[query].slice();

                LOADING[query] = false;
                // We reached the end of the list before the expected number of results
                if (!responseData) {
                    resultsCache.totalForQuery[query] = shotsForQuery.length;
                } else {
                    for (var i in responseData) {
                        shotsForQuery.push(responseData[i]);
                    }
                    resultsCache.dataForQuery[query] = shotsForQuery;
                    resultsCache.nextPageNumberForQuery[query] += 1;
                }

                this.setState({
                    isLoadingTail: false,
                    dataSource: this.getDataSource(resultsCache.dataForQuery[query]),
                });
            })
            .done();
    }

    getDataSource(shots: Array<any>): ListView.DataSource {
        return this.state.dataSource.cloneWithRows(shots);
    }

    selectShot(shot: Object) {
        this.props.navigator.push({
            component: ShotDetails,
            passProps: {shot},
            title: shot.title
        });
    }

    renderFooter() {
        return <View style={styles.scrollSpinner}>
            <Loading />
        </View>;
    }

    renderRow(shot: Object)  {
        return (
            <ShotCell
                onSelect={() => this.selectShot(shot)}
                shot={shot}
            />
        );
    }

    render(){
        var content = this.state.dataSource.getRowCount() === 0 ?
        <Loading/> :
        <ListView
            ref="listview"
            dataSource={this.state.dataSource}
            renderFooter={this.renderFooter}
            renderRow={this.renderRow}
            onEndReached={this.onEndReached}
            automaticallyAdjustContentInsets={false}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps={true}
            showsVerticalScrollIndicator={false}/>;

        return (
            <View style={styles.container}>
                <View style={styles.separator} />
                {content}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "column",
        justifyContent: "center"
    },
    separator: {
        height: 1,
        backgroundColor: "#eeeeee",
    },
    scrollSpinner: {
        marginVertical: 20,
    },
});

AppRegistry.registerComponent('ReactApp', ()=> ShotList);