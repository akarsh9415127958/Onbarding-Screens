import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View,Button } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Icon from "react-native-vector-icons/Ionicons";
import * as Progress from 'react-native-progress';
const slides =[
  {
    key:"one",
    title:"Welcome",
    text:"Welcome to this App",
    image: require("./images/img1.gif"),

  },
  {
    key:"two",
    title:"Welcome",
    text:"Welcome to this App",
    image: require("./images/img2.gif"),
  },
  {
    key:"three",
    title:"Welcome",
    text:"Welcome to this App",
    image: require("./images/img3.gif"),
  },
];



export default class App extends React.Component {
state={showHomePage:false};
_renderItem=({item})=>{
  return(
    <View style = {{flex:1}}>
<Image
source={item.image}
style = {{
  resizeMode:"cover",
  height:"73%",
  width:"100%",
}}
/>
<Text
  style = {{
    paddingTop:25,
    paddingBottom:10,
    fontSize:23,
    fontWeight:"bold",
    color:'#21465b',
    alignSelf:"center"
  }}>
  {item.title}
</Text>

<Text style = {{
  textAlign:'center',
  color:'#b5b5b5',
  fontSize:15,
  paddingHorizontal:30,
}}>
  {item.text}
</Text>
    </View>
  )
}
_renderNextButton=()=>{
  return(
    <View style={styles.buttonCircle}>
      <Icon
      name="md-arrow-round-forward"
      color="rgba(255,255,255,0.9)"
      size={24}
     
      />
    
    </View>
  )
}
_renderDoneButton=()=>{
  return(
    <View style = {styles.buttonCircle}>
      <Icon
      name="md-checkmark"
      color="rgba(255,255,255,0.9)"
      size={24}
      />
    </View>
  )
}


  render(){
    if(this.state.showHomePage){
      return(<App/>
      
        )
    }else
    return(
      
     <AppIntroSlider
     renderItem={this._renderItem}
     data={slides}
    renderDoneButton={this._renderDoneButton}
    renderNextButton={this._renderNextButton}
    
     activeDotStyle={{
       backgroundColor:"#21465b",
       width:30
     }}
     />
    
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCircle:{
  width:41,
  height:41,
  backgroundColor:'rgba(0,0,0,.2)',
  borderRadius:30,
  justifyContent:"center",
  alignItems:"center"
  }
 
});
