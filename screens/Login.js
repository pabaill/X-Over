import { useState } from "react";
import { ImageBackground, TextInput } from "react-native";
import { View, Pressable, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { StyleSheet } from "react-native-web";

import { useFonts, Kanit_400Regular } from "@expo-google-fonts/kanit";

import {auth} from './../firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

import XOverButton from "../components/XOverButton";

import theme from "./../assets/XOverTheme";
import XOverTheme from "./../assets/XOverTheme";

const errorToReadable = {
    "Firebase: Error (auth/email-already-in-use).": "Sorry, that email is already in use. Please log in using that email or create a new account with a different email.",
    "Firebase: Password should be at least 6 characters (auth/weak-password).": "Passwords should be at least six characters.",
    "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).": "For your security, access is temporarily disabled due to several failed login attmepts. Please reset your password or try again later.",
    "Firebase: Error (auth/invalid-email).": "Sorry, that is not a correctly formatted email. Please try again.",
    "Firebase: Error (auth/missing-password).": "Please enter your password, then press \"Log In\".",
    "Firebase: Error (auth/invalid-login-credentials).": "Sorry, your password is incorrect. Please try again."
}


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password).then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email)
        }).catch(err => alert(errorToReadable[err.message]));
    };

    const handleLogIn = () => {
        signInWithEmailAndPassword(auth, email, password).then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email)
        }).catch(err => alert(errorToReadable[err.message]));
    };

    let [fontsLoaded] = useFonts({
        Kanit_400Regular,
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return (
    <SafeAreaView style={{flex: 1}}>
    <ImageBackground style={{flex: 1, position: "absolute", width: "100%", height: "100%"}} source={require('./../assets/login_background.png')}>
      <SafeAreaView style={{ marginVertical: 100, marginHorizontal: 10, flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: XOverTheme.bg_blue + "dd", minHeight: "80%" }}>
        <ScrollView style={{flex: 1}}  > 
        <Text style={styles.titleText}>Welcome to</Text>
        <Image alt="X-Over" source={require('./../assets/X-Over-Logo.png')} />
        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={s => setEmail(s)} />
            <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" value={password} onChangeText={s => setPassword(s)} />
        </View>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
            <XOverButton containerStyles={{marginHorizontal: "10%", width: "60%", marginVertical: 40}} text={"Login"} pressFunc={handleLogIn} />
            <XOverButton containerStyles={{marginHorizontal: "10%", width: "60%"}} text={"Sign Up"} pressFunc={handleSignUp} />
            {/* <Pressable style={[styles.pressable, styles.shadowProp]} onPress={handleLogIn}><Text style={styles.baseText}>Log In</Text></Pressable>
            <Pressable style={[styles.pressable, styles.shadowProp]} onPress={handleSignUp} ><Text style={styles.baseText}>Sign Up</Text></Pressable> */}
        </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
    </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    pressable: {
        backgroundColor: theme.base_yellow,
        width: 300,
        height: 50,
        margin: 30,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30
    },
    input: {
        fontFamily: "Kanit_400Regular",
        borderStyle: "solid",
        borderWidth: 1,
        width: 300,
        height: 50,
        margin: 10,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 15,
        fontSize: 20
    },
    titleText: {
        fontFamily: "Kanit_400Regular",
        fontSize: 40
    },
    baseText: {
        fontFamily: "Kanit_400Regular",
        fontSize: 24
    },
    shadowProp: {
        shadowColor: '#000000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5
      }
})