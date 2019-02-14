import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

// const Spinner = ({ size }) => {
//     return (
//         <View style={styles.spinnerStyle}>
//             <ActivityIndicator size={size || 'large'} />
//         </View>
//     )
// }

class Spinner extends Component {
    render() {
        //const { size } = this.props;
        return (
            <View style={styles.spinnerStyle}>
                <ActivityIndicator size={this.props.size || 'large'} />
            </View>
        );
    }
}

const styles = {
    spinnerStyle : {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export { Spinner }