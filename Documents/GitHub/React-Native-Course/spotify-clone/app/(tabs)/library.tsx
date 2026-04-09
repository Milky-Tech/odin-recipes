import { StyleSheet, Text, View } from "react-native";

const Library = () => { 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Library</Text>
    </View>
  );
};

export default Library;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});