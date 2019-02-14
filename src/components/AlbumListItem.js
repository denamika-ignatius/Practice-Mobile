import React, { Component } from 'react';
import { Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { albumUpdate } from '../actions';

class AlbumListItem extends Component { 

    onRowPress = () => {
        _.each(this.props.album, (value, prop) => {
            this.props.albumUpdate(prop, value);
        });

        this.props.navigation.navigate('EditAlbum');
    }

    render() {
        const { capion, image } = this.props.album;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress} >
                <ScrollView>
                    <CardSection>
                        <Image style= {}/>
                        <Text style={styles.nameStyle}>{caption}</Text>
                    </CardSection>
                    <CardSection>
                        <Image style={imageStyle} source={{ uri: image }}/>
                    </CardSection>
                    <CardSection>

                    </CardSection>
                </ScrollView>
            </TouchableWithoutFeedback>
            
        );
    }
}

const styles = {
    nameStyle: {
        fontSize: 18,
        paddingLeft: 15
    }, phoneStyle: {
        fontSize: 13,
        paddingLeft: 15
    }
};

const imageStyle = {
     height: 300, 
     flex:1 }
export default connect(null, { albumUpdate })(albumListItem);