import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, StyleSheet, Pressable, Image, KeyboardAvoidingView, Alert, Keyboard, Dimensions } from 'react-native';


function Signup({navigation}) {

    useEffect(() => {
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
          setForKeyboard(0);
        });
    
        return () => {
          hideSubscription.remove();
        };
      }, []);

    const [forKeyboard, setForKeyboard] = useState(0)

    const [signupEmail, setSignupEmail] = useState("")
    const [signupPassword, setSignupPassword] = useState("")


    // ------- sign in function -------

    const register = () => {
        Alert.alert("Wait for some time","Backend is in progress currently")
    }


    // ======== XXXXXXX ==========


  return (
    // <View style={styles.containerBox}>
    <KeyboardAvoidingView
    behavior='margin'
    style={styles.containerBox}>

<View style={[styles.imageContainer, {marginTop: forKeyboard}]}>
<Image
    style={styles.signupImage}
    source={require('../assets/signup.png')}
    resizeMode = 'cover'
/>
</View>
        <View style={styles.container}>

            <View style={styles.signupTitle}>
                <Text style={{fontSize: 28, fontWeight: '800', color: '#00000099', letterSpacing: 1}}>Sign up</Text>
            </View>

            <View style={styles.inputEmail}>

        <TextInput
        maxLength={25}
        placeholder='Full Name'
        onPressIn={()=>{ setTimeout(()=>{setForKeyboard(-100)}, 300) }}
        onSubmitEditing={Keyboard.dismiss}
        style={{fontWeight: '700', fontSize: 17}}
        value={signupEmail}
        onChangeText={(e)=> {setSignupEmail(e)}}
        />
            </View>


            <View 
        style={styles.inputEmail}>

        <TextInput
        maxLength={25}
        placeholder='Email ID'
        onPressIn={()=>{ setTimeout(()=>{setForKeyboard(-100)}, 300) }}
        onSubmitEditing={Keyboard.dismiss}
        style={{fontWeight: '700', fontSize: 17}}
        value={signupEmail}
        onChangeText={(e)=> {setSignupEmail(e)}}
        />
            </View>


<View style={styles.inputPassword}>
        <TextInput
        maxLength={25}
        keyboardType='text'
        secureTextEntry = {true}
        placeholder = 'Password'
        onPressIn={()=>{ setTimeout(()=>{setForKeyboard(-150)}, 300) }}
        style={{fontWeight: '700', fontSize: 17}}
        value={signupPassword}
        onChangeText={(e)=> {setSignupPassword(e)}}
        />
</View>




        <Pressable style={styles.signupBtn} onPress={register}>
            <Text style={styles.signupText}>Sign up</Text>
        </Pressable>


        <View style={styles.signBox}>
            <Text style={{fontWeight: '500', color: '#00000099'}}>Already have an account?</Text>
            <Pressable onPress={()=> {navigation.navigate('Login')}}>
                <Text style={styles.sign}>Login</Text>
                </Pressable>
        </View>


        </View>

        </KeyboardAvoidingView>
  )
}

export default Signup



const styles = StyleSheet.create({



    containerBox: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingBottom: 200
    },

    // ---- signup Image -----

    imageContainer: {
        width: '100%',
        height: 280,
        // borderWidth: 1,
    },
    signupImage: {
        height: '105%',
        width: '100%',
    },
    // -------------------

    container: {
        // borderWidth: 1,
        width: '80%',
        alignItems: 'center'
    },

    signupTitle: {
        marginTop: 10,
        // borderWidth: 1,
        width: '100%',
    },

    inputEmail: {
        borderBottomWidth: 2,
        width: '70%',
        marginTop: 10
    },
    inputPassword: {
        borderBottomWidth: 2,
        width: '70%',
        marginTop: 10
    },

    signupBtn: {
        width: '85%',
        backgroundColor: '#2852eb',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        borderRadius: 10

    },

    signupText: {
        fontSize: 19,
        color: '#fff',
        fontWeight: '700',
        letterSpacing: .3
    },


    signBox: {
        flexDirection: 'row',
        marginTop: Dimensions.get('screen').height/27,
        // borderWidth: 1,
        width: '65%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    sign: {
        color: '#2852eb',
        fontWeight: '700',
        letterSpacing: .1,
        fontSize: 16
    }


})