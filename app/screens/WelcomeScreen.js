import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AppButton from "../components/AppButton";
function WelcomeScreen(props) {
  return (
    <ImageBackground blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.tagline}>Sell/donate stuffs you don't need</Text>
      </View>
      <View style={styles.buttoncontainer}>
        <AppButton title="Login"/>        
        <AppButton title="Register" color="secondary"/>   
      </View>     
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems:"center",
    
  },
  buttoncontainer:{
      padding:20,
      width:'100%'
  },
  tagline:{
     fontSize:25,
     fontWeight:"600",
     paddingVertical:20,
     color: '#FFFDD0'
  },

  logo:{
    width:100,
    height:100,
},
  logoContainer:{
      position:"absolute",
      top:60,
      alignItems:"center"
  },



});

export default WelcomeScreen;
