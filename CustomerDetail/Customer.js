import React, { Component } from 'react';
import {
    Form,
    Container,
    Content,
    Input,
    Item as FormItem,
    Button,
    Label,
    Text,
    Picker,
    Textarea,
} from 'native-base';

import { View } from 'react-native';

class Customer extends Component {

    render() {
        return (
            <Content>
                <Form>
                    <FormItem picker>
                        <Picker
                            mode="dropdown"
                            placeholder="Select your SIM" >
                            <Picker.Item label="Wallet" value="key0" />
                            <Picker.Item label="ATM Card" value="key1" />
                            <Picker.Item label="Debit Card" value="key2" />
                            <Picker.Item label="Credit Card" value="key3" />
                            <Picker.Item label="Net Banking" value="key4" />
                        </Picker>
                    </FormItem>

                    <FormItem picker>
                        <Picker
                            mode="dropdown"
                            placeholder="Select your SIM" >
                            <Picker.Item label="Wallet" value="key0" />
                            <Picker.Item label="ATM Card" value="key1" />
                            <Picker.Item label="Debit Card" value="key2" />
                            <Picker.Item label="Credit Card" value="key3" />
                            <Picker.Item label="Net Banking" value="key4" />
                        </Picker>
                    </FormItem>
                    

                    <View style={{ flexDirection:'row' }}f>
                        <Input disabled placeholder='ID'/>
                        <Button block dark><Text> Generate</Text></Button>
                    </View>

                    <FormItem floatingLabel>
                            <Label>Name</Label>
                            <Input placeholder='' />
                        </FormItem>

                        <FormItem floatingLabel>
                            <Label>Address 1</Label>
                            <Input placeholder='' />
                        </FormItem>

                        <FormItem floatingLabel>
                            <Label>Mobile No 1</Label>
                            <Input placeholder='' />
                        </FormItem>

                        <FormItem floatingLabel>
                            <Label>Mobile No 2</Label>
                            <Input placeholder='' />
                        </FormItem>

                        <FormItem floatingLabel>
                            <Label>Location</Label>
                            <Textarea  rowSpan={5} />
                        </FormItem>

                        <FormItem floatingLabel>
                            <Label>Owner Name</Label>
                            <Input placeholder='' />
                        </FormItem>

                        <FormItem floatingLabel>
                            <Label>Description</Label>
                            <Textarea  rowSpan={5} />
                        </FormItem>


                </Form>
            </Content>
        )
    }
}

export default Customer;