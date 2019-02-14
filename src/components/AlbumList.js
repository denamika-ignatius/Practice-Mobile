import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Header } from 'react-native-elements';
import {getAlbumList} from '../actions'
import AlbumListItem from './AlbumListItem';

class AlbumList extends Component {

    static navigationOptions = {
        drawerLabel: 'List of Album'
    };

    componentDidMount(){
        this.props.getAlbumList();
    }

    renderRow = ({item}) =>{
        return <AlbumListItem album={item} 
        navigation={this.props.navigation}/>
    }

    render(){
        return(
            <View>
                <Header
                    placement="left"
                    leftComponent = {{
                        icon: 'menu',
                        color:'#fff',
                        onPress: ()=> this.props.navigation.toggleDrawer()
                    }}
                    centerComponent={{text:'List Album', style:{color:'#fff'}}}
                    containerStyle={{backgroundColor:'salmon'}}    
                />

            <FlatList
                data={this.props.album}
                renderItem={this.renderRow}
            />
            </View>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state.album);

    const album =_.map(state.album, (val, uid)=>{
        return {...val,uid}
    });

    console.log(album);
    return {album};
};

export default connect(mapStateToProps, {getAlbumList})(AlbumList)