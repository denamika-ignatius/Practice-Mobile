import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { albumUpdate } from '../actions';
import { CardSection, Input } from './common';

class AlbumForm extends Component {
    onCaptionChange = (text) => {
        this.props.albumUpdate('caption', text);
    }
    
    onImageChange = (text) => {
        this.props.albumUpdate('image', text);
    }

    render() {
        return(
            <View>
                <CardSection>
                    <Input 
                        label="Caption" 
                        placeholder="Keren Cuk"
                        value={this.props.caption}
                        onChangeText={this.onCaptionChange} 
                        //onChangeText={text => this.props.albumUpdate('name', text)} ==> Tanpa buat Function
                        />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Image" 
                        placeholder="https::/url"
                        value={this.props.image}
                        onChangeText={this.onImageChange} />
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { caption, image } = state.albumForm;

    return { caption, image};
}

export default connect(mapStateToProps, { albumUpdate })(AlbumForm);