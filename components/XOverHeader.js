import { View, Text, StyleSheet } from "react-native";

import { useFonts, Kanit_400Regular, Kanit_700Bold } from "@expo-google-fonts/kanit";
import XOverTheme from "../assets/XOverTheme";

export default function XOverHeader({text, wide, containerStyles, textStyles}) {
    let [fontsLoaded] = useFonts({
        Kanit_400Regular, Kanit_700Bold
      });
    
      if (!fontsLoaded) {
        return null;
      }
    return (<View style={[styles.headerWrapper, {width: wide ? "100%" : "auto"}, containerStyles]} >
                <Text numberOfLines={2} style={[styles.header, textStyles]}>{text}</Text>
            </View>)
}

const styles = StyleSheet.create({
    header: {
      fontFamily: "Kanit_700Bold", 
      fontSize: 24,
      textAlign: "center"
    },
    headerWrapper: { 
      backgroundColor: XOverTheme.base_orange, 
      width: "auto", 
      alignSelf: "flex-start",
      borderColor: "black", 
      borderWidth: 3, 
      padding: 5
    },
  });