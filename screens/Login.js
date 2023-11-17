import { useState } from "react";
import { TextInput } from "react-native";
import { View, Pressable, Text } from "react-native";
import { StyleSheet } from "react-native-web";

import {auth} from './../firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password).then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email)
        }).catch(err => alert(err.message));
    };

    const handleLogIn = () => {
        signInWithEmailAndPassword(auth, email, password).then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email)
        }).catch(err => alert(err.message));
    };

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome to X-Over</Text>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TextInput placeholder="Email" value={email} onChangeText={s => setEmail(s)} />
            <TextInput placeholder="Password" value={password} onChangeText={s => setPassword(s)} />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Pressable onPress={handleLogIn}><Text>Log In</Text></Pressable>
            <Pressable onPress={handleSignUp} ><Text>Sign Up</Text></Pressable>
        </View>
      </View>
    );
  }

// const styles = StyleSheet.create({
//     baseText: {
//         fontFamily: "Kanit"
//     }
// })