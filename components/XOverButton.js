import { View, Text, StyleSheet, Pressable } from "react-native";

import { useFonts, Kanit_400Regular, Kanit_700Bold } from "@expo-google-fonts/kanit";
import XOverTheme from "../assets/XOverTheme";

export default function XOverButton({text, icon, pressFunc, containerStyles, buttonStyles, disabled}) {
    let [fontsLoaded] = useFonts({
        Kanit_400Regular, Kanit_700Bold
      });
    
      if (!fontsLoaded) {
        return null;
      }
    return (<View style={[styles.shadow, containerStyles]}>
              <Pressable disabled={disabled} style={({pressed}) => [disabled ? styles.disabled : styles.button, {top: pressed || disabled ? 0 : -5, left: pressed || disabled ? 0 : 5}, buttonStyles]} onPress={() => pressFunc()}>
                {text && <Text style={styles.buttonText}>{text}</Text>}
                {icon}
              </Pressable>
            </View>)
}

const styles = StyleSheet.create({
    buttonText: {
      fontFamily: "Kanit_400Regular",
      fontSize: 24,
      textAlign: "center"
    },
    button: {
      borderColor: "black", 
      borderWidth: 3, 
      backgroundColor: XOverTheme.base_yellow,
      width: "120%",
      marginLeft: 0, 
      padding: 5,
      top: -5,
      left: 5
    },
    disabled: {
      borderColor: "black", 
      borderWidth: 3, 
      backgroundColor: XOverTheme.bg_blue,
      padding: 5,
      top: 0,
      left: 0,
      marginLeft: 0
    },
    shadow: {backgroundColor: "black", width: "auto", alignSelf: "flex-start"},
  });