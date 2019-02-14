import React , {Component} from 'react';
import {connect} from 'react-redux';
import {View , Text} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation'
import {Header} from 'react-native-elements';
import {Card, CardSection, Button, Input, Spinner} from './common';

class LoginForm extends Component {

    componentDidUpdate() {
        if(this.props.user) {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'MainMenu'})],
            });
            this.props.navigation.dispatch(resetAction);
        }
    }

    onEmailChange = (text) => {
        this.props.emailChanged(text);
        console.log(text);
    }

    onPasswordChange = (text) => {
        this.props.passwordChanged(text);
        console.log(text);
    }

    onButtonPress = () => {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderError(){
        if (this.props.error){
            return (
                <View style={{backgroundColor: '#FFF'}}>
                    <Text style = {style.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    renderButton() {
        if(this.props.loading) {
            return <Spinner size="large" />
        }
        return (
            <Button onPress={this.onButtonPress}>
                Login
            </Button>
        )
    }

    render() {
        return(
           <View>
               <Header centerComponent={{ text: 'LOGIN PLEASE', style: {color: '#FFF'}}} containerStyle={{backgroundColor: 'salmon'}}/>
               <Card>
                   <CardSection>
                       <Input 
                            label="Email" 
                            placeholder="Name@email.com"
                            onChangeText={this.onEmailChange} 
                            value={this.props.email}
                        />
                   </CardSection>
                   <CardSection>
                       <Input 
                            secureTextEntry
                            label="Password"
                            placeholder="Your Pass"
                            onChangeText={this.onPasswordChange}
                            value={this.props.password}
                        />
                   </CardSection>
                   {this.renderError()}
                   <CardSection>
                       {this.renderButton()}
                   </CardSection>
               </Card>
           </View>
        );
    }
}

const style = {
    errorTextStyle: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'blue'
    }
}

const mapStateToProps = (state) => {
    const { email, password, error, loading, user } = state.auth;

    return { email, password, error, loading, user };
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);

