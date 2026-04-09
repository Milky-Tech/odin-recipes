import { ActivityIndicator, StyleSheet, Text, TextInput, View } from "react-native";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import { Button } from "@expo/ui/swift-ui";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Milkyink Here Champ!</Text>
      <Image
        source="https://images.unsplash.com/photo-1506744038136-479a7d45f98a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        style={styles.image}
      />
      <TextInput placeholder="Enter your name" style={styles.input} />
      <Button title="Submit" onPress={() => console.log("Submitted")} />    
        <ActivityIndicator size="large" color="#fff" />
        <Link href="/about">
          <Text style={styles.text}>Go to About Page</Text>
        </Link>
        <Button onPress={() => router.push("/about")} >
          <Text>Go to About Page</Text>
        </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: "#fff",
  },
  });