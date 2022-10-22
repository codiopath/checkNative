import React, {useState} from 'react'
import { Text, View, StyleSheet, TextInput, Dimensions, ScrollView, Pressable, Modal, Alert } from 'react-native'

function AddUser({navigation}) {
    const [genderModal,  setGenderModal] = useState(false)
    const [villageModal, setVillageModal] = useState(false)

    // ----------- Input States --------------

    const [firstName, setFirstName] = useState("")
    const [surName, setSurName] = useState("")
    const [gender, setGender] = useState("SELECT GENDER")
    const [mobile, setMobile] = useState(0)
    const [nativeVillage, setNativeVillage] = useState("SELECT NATIVE VILLAGE")

    // =========== XXXXXXXX ==================
  
    const openGenderModal = () => {
      setGenderModal(true)
    }
    const openVillageModal = () => {
      setVillageModal(true)
    }

    const sendData = () => {
        if(!firstName){
            Alert.alert("Denied!","Enter First Name first")
        }
        if(!surName){
            Alert.alert("Denied!","Enter Sur Name first")
        }
        if(gender === "SELECT GENDER"){
            Alert.alert("Denied!","Select the Gender First")
        }
        if(nativeVillage === "SELECT NATIVE VILLAGE"){
            Alert.alert("Denied!","Select Native Village First")
        }

        else{
            navigation.navigate('UserData', {firstName, surName, gender, mobile, nativeVillage})
        }
        
    }
  
    return (
  
  <>
  
  
          
        <Modal
      animationType="slide"
      transparent={true}
      visible={genderModal}
      onRequestClose={() => {
         setGenderModal(false)
      }}
        >
          <View style={styles.dropdownModal}>
        <Pressable style={styles.dropdownModalText} onPress={()=>{setGender("MALE") 
        setGenderModal(false)}}>
           <Text>MALE</Text> 
            </Pressable>
        <Pressable style={styles.dropdownModalText} onPress={()=>{setGender("FEMALE")
        setGenderModal(false)}}>
            <Text>FEMALE</Text>
        </Pressable>
      </View>
        </Modal>      
  
  
        <Modal
      animationType="slide"
      transparent={true}
      visible={villageModal}
      onRequestClose={() => {
         setVillageModal(false)
      }}
        >
        <View style={styles.dropdownModal}>
        <Pressable style={styles.dropdownModalText} onPress={()=>{setNativeVillage("AJMER")
        setVillageModal(false)}}><Text>AJMER</Text></Pressable>
        <Pressable style={styles.dropdownModalText} onPress={()=>{setNativeVillage("AKOLA")
        setVillageModal(false)}}><Text>AKOLA</Text></Pressable>
        <Pressable style={styles.dropdownModalText} onPress={()=>{setNativeVillage("AMDALA")
        setVillageModal(false)}}><Text>AMDALA</Text></Pressable>
        <Pressable style={styles.dropdownModalText} onPress={()=>{setNativeVillage("AMLET")
        setVillageModal(false)}}><Text>AMLET</Text></Pressable>
        <Pressable style={styles.dropdownModalText} onPress={()=>{setNativeVillage("X")
        setVillageModal(false)}}><Text>X</Text></Pressable>
        <Pressable style={styles.dropdownModalText} onPress={()=>{setNativeVillage("Y")
        setVillageModal(false)}}><Text>Y</Text></Pressable>
        <Pressable style={styles.dropdownModalText} onPress={()=>{setNativeVillage("Z")
        setVillageModal(false)}}><Text>Z</Text></Pressable>
      </View>
  
      </Modal>      
  
  
  
        
  <ScrollView>
      <View style={styles.containerBox}>
    
    
            <View style={styles.container}>
  
  
  
              <Text style={{color: 'purple', fontSize: 35, fontWeight: '700', marginTop: 20}}>Add User</Text>
  
              <View style={[styles.inputBox, {marginTop: 10}]}>
                  <Text style={styles.label}>First Name</Text>
                  <TextInput
                  placeholder='First Name'
                  style={styles.input}
                  placeholderTextColor= 'gray'
                  value={firstName}
                  onChangeText= {(e)=>{setFirstName(e)}}
                  maxLength={15}
                  />
              </View>
              <View style={styles.inputBox}>
                  <Text style={styles.label}>Sur Name</Text>
                  <TextInput
                  placeholder='Sur Name'
                  style={styles.input}
                  placeholderTextColor= 'gray'
                  value={surName}
                  onChangeText= {(e)=>{setSurName(e)}}
                  maxLength={20}
                  />
              </View>
  
  
  
              <View style={styles.inputBox}>
                  <Text style={styles.label}>Gender *</Text>
                  
                  <Pressable style={styles.input} onPress={openGenderModal}>
  
                  <Text style={styles.dropdownText}>{gender}</Text>
                  </Pressable>
              </View>
  
  
  
              <View style={styles.inputBox}>
                  <Text style={styles.label}>Mobile</Text>
                  <TextInput
                  placeholder='Mobile No.'
                  style={styles.input}
                  placeholderTextColor= 'gray'
                  keyboardType='number-pad'
                  value={mobile}
                  onChangeText= {(e)=>{setMobile(e)}}
                  maxLength={10}
                  />
              </View>
              <View style={styles.inputBox}>
                  <Text style={styles.label}>Native Village *</Text>
                  
                  <Pressable style={styles.input} onPress={openVillageModal}>
  
                  <Text style={styles.dropdownText}>{nativeVillage}</Text>
                  </Pressable>
              </View>
              {/* <View style={styles.inputBox}>
                  <Text style={styles.label}>First Name</Text>
                  <TextInput
                  placeholder='First Name'
                  style={styles.input}
                  placeholderTextColor= 'gray'
                  />
              </View> */}
  
  
  
  
              <View style={styles.btnBoxStyle}>
                <Pressable style={styles.btnStyle} onPress={sendData}>
                  <Text style={{color: '#fff', fontWeight: '700', fontSize: 18, letterSpacing: .9}}>
                  SUBMIT
                  </Text>
                </Pressable>
              </View>
  
            </View>
  
  
  
      </View>
              </ScrollView>
              </>
    )
  }

export default AddUser

const styles = StyleSheet.create({


    containerBox: {
      backgroundColor: '#c9b3ff',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      paddingBottom: 40
    },
  
    container: {
      borderWidth: 1,
      width: '90%',
      paddingBottom: 40,
      marginTop: 30,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#b3daff90',
    },
  
    inputBox: {
      // borderWidth: 1,
      width: '75%',
      marginTop: 7
    },
  
    label: {
      fontWeight: '500',
      color: 'black',
      fontSize: 16,
      letterSpacing: .4
    },
  
    input: {
      borderWidth: 1,
      paddingVertical: 10,
      fontWeight: '600',
      // marginLeft: 2,
      paddingHorizontal: 15,
      backgroundColor: '#fff',
      borderRadius: 10,
      color: 'gray',
      marginTop: 8,
      letterSpacing: 1,
      fontSize: 16
    },
  
    btnBoxStyle: {
      alignItems: 'center',
      width: '100%'
    },
  
    btnStyle: {
      width: '60%',
      backgroundColor: 'purple',
      marginTop: 40,
      paddingVertical: 12,
      alignItems: 'center',
      borderRadius: 7
    },
  
    dropdownText: {
      fontWeight: '600',
      fontSize: 16,
      color: 'gray'
    },
    dropdownModal: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      backgroundColor: '#00000080'
    },
  
  
    dropdownModalText: {
        color: '#fff',
        marginTop: 30,
        fontSize: 30,
        borderWidth: 2,
        paddingHorizontal: 20,
        paddingVertical: 7
    }
  
  
  })