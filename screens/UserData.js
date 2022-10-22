import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function UserData({navigation, route}) {
  return (
    <>
    <View style={styles.containerBox}>

    <View style={{marginTop: 20}}>
        <Text style = {styles.text}>First Name - {route.params.firstName}</Text>
        <Text style = {styles.text}>Sur Name - {route.params.surName}</Text>
        <Text style = {styles.text}>Gender - {route.params.gender}</Text>
        <Text style = {styles.text}>Mobile - {route.params.mobile}</Text>
        <Text style = {styles.text}>Native Village - {route.params.nativeVillage}</Text>
    </View>
    </View>
    </>
  )
}

export default UserData



const styles = StyleSheet.create({
  containerBox : {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  text: {
    fontSize: 23
  }
})