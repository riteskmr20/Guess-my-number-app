import { StyleSheet, Text } from "react-native";

export default Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#f3ecec',
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#161614",
    marginTop: 24,
    padding:8,
  },
});
