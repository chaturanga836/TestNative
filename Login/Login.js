import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { View} from 'react-native';
import {
    Form,
    Container,
    Content,
    Input,
    Item as FormItem,
    Button,
    Label,
    Text
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

class Login extends Component {


    render() {
        const { navigate } = this.props.navigation;

        return (
            <LinearGradient colors={['#e5e5e5',  '#e5e5e5']} style={styles.linearGradient}>
                <View style={styles.content}>
                    <Form>
                        <FormItem floatingLabel>
                            <Label style={styles.lable}>username</Label>
                            <Input placeholder='' />
                        </FormItem>
                        <Text style={styles.errorFiles}>Invalid Username</Text>

                        <FormItem floatingLabel >
                            <Label style={styles.lable}>password</Label>
                            <Input  placeholder='' />
                        </FormItem>
                        <Text style={styles.errorFiles}>Invalid password</Text>
                        <Button block dark onPress={() => navigate('Customer')}><Text> Login</Text></Button>
               
                        
                    </Form>
                </View>
                </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
    content:{
        position: 'absolute', 
        top: 0, 
        bottom: 0, 
        left: 0, 
        right: 0,
    },

    loginButton: {
        marginTop: 100,
    },

    lable: {
        color: '#AAAAAA',
    },
    errorFiles: {
        marginTop: 10,
        marginLeft: 10,
        textAlign: 'left',
        fontSize: 12,
        color: '#FF4136',
    },
});

export default Login;