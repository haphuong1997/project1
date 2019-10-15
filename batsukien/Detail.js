import React from 'react';
import {View,Text,Button} from 'react-native';
export default class DetailScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Danh sach users</Text>
              
               
                <Text>{this.props.navigation.getParam('Detail','default1234')}</Text>
            </View>
        )
    }
}