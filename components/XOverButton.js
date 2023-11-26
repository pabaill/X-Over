import { View, Text, StyleSheet, Pressable } from "react-native";

import { useFonts, Kanit_400Regular, Kanit_700Bold } from "@expo-google-fonts/kanit";
import XOverTheme from "../assets/XOverTheme";

export default function XOverButton({text, pressFunc}) {
    let [fontsLoaded] = useFonts({
        Kanit_400Regular, Kanit_700Bold
      });
    
      if (!fontsLoaded) {
        return null;
      }
    return (<View style={styles.shadow}>
              <Pressable style={({pressed}) => [styles.button, {top: pressed ? 0 : -5, left: pressed ? 0 : 5}]} onPress={() => pressFunc()}>
                <Text style={styles.buttonText}>{text}</Text>
              </Pressable>
            </View>)
}

const styles = StyleSheet.create({
    buttonText: {
      fontFamily: "Kanit_400Regular"
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
    shadow: {backgroundColor: "black", width: "auto", alignSelf: "flex-start"},
  });