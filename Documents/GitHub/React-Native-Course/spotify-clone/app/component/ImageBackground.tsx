import { ImageBackground, Text, View } from "react-native";

<ImageBackground
  source={require("../../assets/images/spotifyLogo.png")}
  style={{ width: "100%", height: 200 }}
>
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ color: "#fff", fontSize: 20 }}>
      Overlay Content
    </Text>
  </View>
</ImageBackground>