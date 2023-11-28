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
    return (<View style={[styles.shadow, {width: wide ? "100%" : "auto"}, containerStyles]} >
                <View style={styles.headerWrapper}>
                <Text numberOfLines={2} style={[styles.header, textStyles]}>{text}</Text>
                </View>
            </View>)
}

const styles = StyleSheet.create({
    header: {
      fontFamily: "Kanit_700Bold", 
      fontSize: 30,
      textAlign: "center"
    },
    headerWrapper: {
      borderColor: "black", 
      borderWidth: 3, 
      backgroundColor: XOverTheme.base_orange,
      maxWidth: "100%",
      marginLeft: 0, 
      padding: 5,
      top: -5,
      left: 5
    },
    shadow: { backgroundColor: "black", width: "auto", alignSelf: "flex-start"},
  });