import React, { Component } from 'react';
import {TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import{Audio} from 'expo-av';

class BlueButton extends Component {
  displayAlert1=()=>{
    alert('Blue!');
  }
  render(){
    return(
      <TouchableOpacity style={{marginLeft: 50 ,marginTop:400,borderWidth: 10,borderColor:"yellow",backgroundColor: "blue",    borderRadius:100,alignItems:"center",justifyContent:"center",width:100,height:100}} onPress={this.displayAlert1}/>

      
    )
  }
}
class RedButton extends Component {
  displayAlert2=()=>{
    alert('Red!');
  }
  render(){
    return(
      <TouchableOpacity style={{marginLeft: 50 ,marginTop:200,borderWidth: 10,borderColor:"yellow",backgroundColor: "red",    borderRadius:100,alignItems:"center",justifyContent:"center",width:100,height:100}} onPress={this.displayAlert2}/>
    )
  }
}

class YellowButton extends Component {
  displayAlert3=()=>{
    alert('Yellow!');
  }
  render(){
    return(
      <TouchableOpacity style={{marginLeft: 50 ,marginTop:100,borderWidth: 10,borderColor:"orange",backgroundColor: "yellow",    borderRadius:100,alignItems:"center",justifyContent:"center",width:100,height:100}} onPress={this.displayAlert3}/>
    )
  }
}

class GreenButton extends Component {
  displayAlert4=()=>{
    alert('Green!');
  }
  render(){
    return(
      <TouchableOpacity style={{marginLeft: 250 ,marginTop:200,borderWidth: 10,borderColor:"yellow",backgroundColor: "green",    borderRadius:100,alignItems:"center",justifyContent:"center",width:100,height:100}} onPress={this.displayAlert4}/>
    )
  }
}

class BlackButton extends Component {
  displayAlert5=()=>{
    alert('Black!');
  }
  render(){
    return(
      <TouchableOpacity style={{marginLeft: 250 ,marginTop:300,borderWidth: 10,borderColor:"yellow",backgroundColor: "black",    borderRadius:100,alignItems:"center",justifyContent:"center",width:100,height:100}} onPress={this.displayAlert5}/>
    )
  }
}

export default class App extends React.Component {
  render() {
    return(
      <View>
      <BlueButton />
      <RedButton />
      <YellowButton />
      <GreenButton />
      <BlackButton />
      </View>
    );
  }
}
