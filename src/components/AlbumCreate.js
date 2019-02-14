import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions';
import { Card, Button, CardSection } from './common';
import AlbumForm from './AlbumForm';

class EmployeeCreate extends Component {
    
    static navigationOptions = {
        drawerLabel: 'Add New Album'
    };

    onButtonPress = () => {
        const { caption, image } = this.props;
        this.props.AlbumCreate(caption, image);
    }

    render() {
        return(
            <View>
                <Header 
                    placement="left"
                    leftComponent={{
                        icon: 'menu',
                        color: '#FFF',
                        onPress: () => this.props.navigation.toggleDrawer()
                    }}
                    centerComponent={{text: 'Add Album', style: { color: '#FFF' }}}
                    rightComponent={{
                        icon: 'home',
                        color: '#FFF',
                        onPress: () => this.props.navigation.navigate('EmployeeList')
                    }}
                    containerStyle={{backgroundColor: 'salmon'}}
                />
                {/* <Text>Ini Employee Create</Text> */}

                <Card>
                    <EmployeeForm />

                    <CardSection>
                        <Button onPress={this.onButtonPress}>
                            Post
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { caption, image } = state.AlbumForm;

    return { caption, image };
}

export default connect(mapStateToProps, { AlbumCreate })(AlbumCreate);