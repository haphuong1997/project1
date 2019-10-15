import React from 'react';
import {View,Text,Button, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default class HomeScreen extends React.Component{
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View>
                <View style= {[Styles.day1]}>
                    <Text style={{width:100}}>Email:</Text>
                    <TextInput style={{color:"red",backgroundColor:"violet",width:250}}></TextInput>
                </View>
                <View style= {[Styles.day2]}>
                    <Text style={{width:100}}>Pass:</Text>
                    <TextInput style={{color:"red",backgroundColor:"violet",width:250}}></TextInput>
                </View>
                <Button title="Login" onPress={() =>navigate('Detail',{name:"xin chao"})} />
            </View>
        );}}


        const Styles = StyleSheet.create({
            day1:{
               color: 'red', 
               flexDirection:'row',
               marginTop:10,
               padding:10,

            },
            day2:{
                color:"yellow",
                marginTop:10,
               padding:10,
               
                flexDirection:'row',
                
            }

        });