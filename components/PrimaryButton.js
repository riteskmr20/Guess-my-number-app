import { Pressable, StyleSheet, Text, View } from "react-native";



export default PrimaryButton = ({ children,onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed})=> pressed ? [styles.buttonInnerContainer,styles.pressed]: styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: "#561414" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow:'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: "#8ba682",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation:2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed:{
    opacity:0.75,
  }
});
