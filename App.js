import { StyleSheet, ImageBackground,SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";

export default function App() {
  const[userNumber,setUserNumber]=useState();


  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
  }

  let screen=<StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber)
    {
      screen=<GameScreen userNumber={userNumber}/>
    }

  return (
    <LinearGradient
      colors={["#ddb52f", "#4d494c"]}
      style={styles.rootScreen} 
    >
      <ImageBackground
        source={require("./assets/images/backgroundImage.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage:{
   opacity:0.15,
  },
});
