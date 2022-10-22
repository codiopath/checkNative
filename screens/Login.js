import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, StyleSheet, Pressable, Image, KeyboardAvoidingView, Alert, Keyboard, Dimensions } from 'react-native';


function Login({navigation}) {

    useEffect(() => {
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
          setForKeyboard(0);
        });
    
        return () => {
          hideSubscription.remove();
        };
      }, []);

    const [forKeyboard, setForKeyboard] = useState(0)

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")


    // ------- sign in function -------

    const signIn = () => {
        if(loginEmail === "admin@gmail.com" && loginPassword === 'admin123'){
            Alert.alert("Hello Admin !", "Welcome")
            navigation.navigate('AddUser')

            setLoginEmail("")
            setLoginPassword("")
        }
        else{
            Alert.alert("Access Denied!", "Enter Valid Credentials")
        }
        // alert(loginEmail, loginPassword)
    }


    // ======== XXXXXXX ==========


  return (
    // <View style={styles.containerBox}>
    <KeyboardAvoidingView
    behavior='margin'
    style={styles.containerBox}>

<View style={[styles.imageContainer, {marginTop: forKeyboard}]}>
<Image
    style={styles.loginImage}
    source={require('../assets/login.jpg')}
    resizeMode = 'cover'
/>
</View>
        <View style={styles.container}>

            <View style={styles.loginTitle}>
                <Text style={{fontSize: 28, fontWeight: '800', color: '#00000099', letterSpacing: 1}}>Login</Text>
            </View>

            <View 
        style={styles.inputEmail}>

        <TextInput
        maxLength={25}
        placeholder='Email ID'
        onPressIn={()=>{ setTimeout(()=>{setForKeyboard(-100)}, 300) }}
        onSubmitEditing={Keyboard.dismiss}
        style={{fontWeight: '700', fontSize: 17}}
        value={loginEmail}
        onChangeText={(e)=> {setLoginEmail(e)}}
        />
            </View>


<View style={styles.inputPassword}>
        <TextInput
        maxLength={25}
        keyboardType='text'
        secureTextEntry = {true}
        placeholder = 'Password'
        onPressIn={()=>{ setTimeout(()=>{setForKeyboard(-100)}, 300) }}
        style={{fontWeight: '700', fontSize: 17}}
        value={loginPassword}
        onChangeText={(e)=> {setLoginPassword(e)}}
        />
</View>

{/* ---------- Forgot Password ---------- */}

    <View style={styles.forgot}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
    </View>



    {/* =========== XXXXXXXXXXXXXX ============= */}



        <Pressable style={styles.loginBtn} onPress={signIn}>
            <Text style={styles.loginText}>LOGIN</Text>
        </Pressable>


        <View style={styles.signBox}>
            <Text style={{fontWeight: '500', color: '#00000099'}}>Don't have an account?</Text>
            <Pressable onPress={()=>{navigation.navigate('Signup')}}>
                <Text style={styles.sign}>Sign Up</Text>
                </Pressable>
        </View>


        </View>

        </KeyboardAvoidingView>
  )
}

export default Login



const styles = StyleSheet.create({



    containerBox: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingBottom: 200
    },

    // ---- Login Image -----

    imageContainer: {
        width: '100%',
        height: 300,
        // borderWidth: 1,
    },
    loginImage: {
        height: '105%',
        width: '100%',
    },
    // -------------------

    container: {
        // borderWidth: 1,
        width: '80%',
        alignItems: 'center'
    },

    loginTitle: {
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

    loginBtn: {
        width: '85%',
        backgroundColor: '#2852eb',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        borderRadius: 10

    },

    loginText: {
        fontSize: 19,
        color: '#fff',
        fontWeight: '700',
        letterSpacing: .3
    },

    // --------- Forgot Passwprd ------------

    forgot: {
        marginTop: 5,
        alignItems: 'flex-end',
        // borderWidth: 1,
        width: '70%'
    },

    forgotText: {
        color: '#2852eb',
        fontWeight: '700'
    },

    // =============== XXXXXXXXXXX =============


    signBox: {
        flexDirection: 'row',
        marginTop: Dimensions.get('screen').height/15,
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