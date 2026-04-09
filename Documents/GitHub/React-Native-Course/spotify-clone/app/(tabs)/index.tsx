import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Image} from "expo-image";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {

 
  const [activeCategory, setActiveCategory] = useState(1);
  
  const songsHistory = [
  {
    id: 1,
    title: "Midnight Echoes",
    thumbnail: "https://picsum.photos/id/237/300/300",
    isPlaying:true,
  },
  {
    id: 2,
    title: "Golden Rhythm",
    thumbnail: "https://picsum.photos/id/238/300/300",
    isPlaying:false,
  },
  {
    id: 3,
    title: "Electric Dreams",
    thumbnail: "https://picsum.photos/id/239/300/300",
    isPlaying:false,
  },
  {
    id: 4,
    title: "Neon Skyline",
    thumbnail: "https://picsum.photos/id/240/300/300",
    isPlaying:false,
  },
  {
    id: 5,
    title: "Ocean Vibes",
    thumbnail: "https://picsum.photos/id/241/300/300",
    isPlaying:false,
    },
  {
    id: 6,
    title: "City Nights",
    thumbnail: "https://picsum.photos/id/242/300/300",
    isPlaying:false,
  },
  {
    id: 7,
    title: "Velvet Waves",
    thumbnail: "https://picsum.photos/id/243/300/300",
    isPlaying:false,
  },
  {
    id: 8,
    title: "Digital Sunset",
    thumbnail: "https://picsum.photos/id/244/300/300",
    isPlaying:false,
    isPlaying:false,
  },
  {
    id: 9,
    title: "Gravity Beats",
    thumbnail: "https://picsum.photos/id/245/300/300",
    isPlaying:false,
  },
  {
    id: 10,
    title: "Cosmic Flow",
    thumbnail: "https://picsum.photos/id/246/300/300",
    isPlaying:false,
  },
];
  return (
    <View
      style={styles.container}
    >
      <View style={{flexDirection:"row", gap:3, alignItems:"center", justifyContent:"space-between", width:"70%", height:"100px"}}>
        <View style={{borderRadius:"50%", height:50, width:50, overflow:"hidden"}}><Image   source={require("../../assets/images/spotifyLogo.png")} style={{width:"100%", height:"100%"}} /></View>
       <TouchableOpacity onPress={() => setActiveCategory(1)} style={activeCategory === 1 ? {borderRadius:17 , height:35, backgroundColor:"#1DB954", paddingHorizontal:17, alignItems:"center", justifyContent:"center"} : {borderRadius:16, height:35, backgroundColor:"#373131ff", paddingHorizontal:17, alignItems:"center", justifyContent:"center" }}><Text style={activeCategory === 1 ? {color:"#000", fontSize:14, textAlign:"center", textAlignVertical:"center"} :  {color:"#fff", fontSize:14, textAlign:"center", textAlignVertical:"center"}}>All</Text></TouchableOpacity>
       <View style={{flexDirection:"row", gap:-1, alignItems:"center", height:"100px", borderRadius:16, backgroundColor:"#373131ff",}}><TouchableOpacity onPress={() => setActiveCategory(2)} style={activeCategory === 2 ? {borderRadius:17 , height:35, backgroundColor:"#1DB954", paddingHorizontal:17, alignItems:"center", justifyContent:"center"} : {borderRadius:16, height:35, backgroundColor:"#373131ff", paddingHorizontal:17, alignItems:"center", justifyContent:"center" }}><Text style={activeCategory === 2 ? {color:"#000", fontSize:14, textAlign:"center", textAlignVertical:"center"} :  {color:"#fff", fontSize:14, textAlign:"center", textAlignVertical:"center"}}>Music</Text></TouchableOpacity>
        {activeCategory === 2 && <TouchableOpacity style={{borderRadius:16, height:35, backgroundColor:"#373131ff", paddingHorizontal:17, alignItems:"center", justifyContent:"center"}}><Text style={{color:"#fff", fontSize:14, textAlign:"center", textAlignVertical:"center"}}>Following</Text></TouchableOpacity>}</View>
        <View style={{flexDirection:"row", gap:-1, alignItems:"center", height:"100px", borderRadius:16, backgroundColor:"#373131ff",}}><TouchableOpacity onPress={() => setActiveCategory(3)} style={activeCategory === 3 ? {borderRadius:17 , height:35, backgroundColor:"#1DB954", paddingHorizontal:17, alignItems:"center", justifyContent:"center"} : {borderRadius:16, height:35, backgroundColor:"#373131ff", paddingHorizontal:17, alignItems:"center", justifyContent:"center" }}><Text style={activeCategory === 3 ? {color:"#000", fontSize:14, textAlign:"center", textAlignVertical:"center"} :  {color:"#fff", fontSize:14, textAlign:"center", textAlignVertical:"center"}}>Podcasts</Text></TouchableOpacity>
        {activeCategory === 3 && <TouchableOpacity style={{height:35, borderRadius:16, paddingHorizontal:17, alignItems:"center", justifyContent:"center"}}><Text style={{color:"#fff", fontSize:14, textAlign:"center", textAlignVertical:"center"}}>Following</Text></TouchableOpacity>}</View>
        </View>

        <View style={{width:"100%"}}>
          <FlatList
          data={songsHistory.slice(0, 8)}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
      <View
      key={item.id}
      style={{
      flex: 1,
      flexDirection: "row",
      margin: 4,
      alignItems: "center",
      height: 50,
      borderRadius: 5,
      backgroundColor: "#312f2f",
      gap: 6,
      paddingHorizontal: 8
    }}
  >
    <Image
      source={require('../../assets/images/spotifyLogo.png')}
      style={{ width: 50, height: 50, borderRadius: 25 }}
    />

    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={styles.text}>{item.title}</Text>
    </View>

    { item.isPlaying ? <Ionicons name="ellipsis-horizontal" size={12} color="#1DB954" />:""}
  </View>
)} />
        </View>

        <View style={{width:"100%"}}>
          <Text style={styles.text}>Recomeneded Stations</Text>
          <ScrollView>  <View style={{width:150, height:150, backgroundColor:"", borderRadius:16}}></View></ScrollView>
        </View>
    </View>
  );
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,    
      paddingTop:50,
      backgroundColor: "#121212",
      paddingHorizontal:10,
    },
    text: {
      color: "#fff",
      fontSize: 13,
      fontWeight:"600"
    },
   history:{
   alignItems:"center",
    justifyContent:"space-between",
    width:"100%",
    borderRadius:16,
    backgroundColor:"#373131ff",
    paddingHorizontal:17,
   }
  });