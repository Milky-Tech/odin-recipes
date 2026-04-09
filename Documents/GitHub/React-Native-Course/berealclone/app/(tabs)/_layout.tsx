import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return <Tabs screenOptions={{tabBarActiveTintColor:"crimson"}}>
    <Tabs.Screen name="index" options={{ headerShown: false, title: "Home", tabBarIcon: ({ color, size, focused}) => (
      <Ionicons name={focused ? "home" : "home-outline"} color={color} size={size} />
    ) }}/>
    <Tabs.Screen name="about" options={{ headerShown: false, title: "About", tabBarIcon: ({ color, size, focused}) => (
      <Ionicons name={focused ? "information-circle" : "information-circle-outline"} color={color} size={size} />
    ) }}/>
    <Tabs.Screen name="profile" options={{ headerShown: false, title: "Profile", tabBarIcon: ({ color, size, focused}) => (
      <Ionicons name={focused ? "person" : "person-outline"} color={color} size={size} />
    )  }}/>
  </Tabs>
}
