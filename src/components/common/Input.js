import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

const styles = {
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        height: 45,
        width: 100,
        flex: 2
    },
    containerStyle: {
        height: 40,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

class Input extends Component {

    render() {
        const { label, placeholder, secureTextEntry, value, onChangeText } = this.props;
        const { labelStyle, inputStyle, containerStyle } = styles;

        return (
            <View style={containerStyle}>
                <Text style={labelStyle}>{label}</Text>
                <TextInput
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    autoCorrect={false}
                    value={value}
                    onChangeText={onChangeText}
                    style={inputStyle} />
            </View>
        );
    }
    
}

export { Input };