import { Tabs } from "expo-router";
import {Ionicons} from "@expo/vector-icons"

export default function RootLayout() {
  return <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor:"#fff",tabBarInactiveTintColor:"#929292",tabBarStyle:{backgroundColor:"#000"}}}>
    <Tabs.Screen name="index" options={{ title: "Home", tabBarLabel:"Home",tabBarIcon:({color,size, focused}) =>(  
      <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
    ) }} />
    <Tabs.Screen name="search" options={{ title: "Search", tabBarLabel:"Search",tabBarIcon:({color,size, focused}) =>(  
      <Ionicons name={focused ? "search" : "search-outline"} size={size} color={color} />
    ) }} />
    <Tabs.Screen name="library" options={{ title: "Library", tabBarLabel:"Library",tabBarIcon:({color,size, focused}) =>(  
      <Ionicons name={focused ? "library" : "library-outline"} size={size} color={color} />
    ) }} />
    <Tabs.Screen name="premium" options={{ title: "Premium", tabBarLabel:"Premium",tabBarIcon:({color,size, focused}) =>(  
      <Ionicons name={focused ? "diamond" : "diamond-outline"} size={size} color={color} />
    ) }} />
  </Tabs>;
}
