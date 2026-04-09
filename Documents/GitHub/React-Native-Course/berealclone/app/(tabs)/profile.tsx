import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const profile = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: "#fff", fontSize: 20, fontWeight: "bold"}} >profile</Text>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#000",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
})