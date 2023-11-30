import { View, Image, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Kanit_400Regular } from "@expo-google-fonts/kanit";
import { useFonts } from "@expo-google-fonts/kanit";

export default function XOverProfileChip({person}) {

    let [fontsLoaded] = useFonts({
        Kanit_400Regular
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return (
        <View style={{height: 80, width: 80, marginHorizontal: 20, resizeMode: "contain"}}>
            <Image style={{flex: 1, height: "70%", width: "auto", resizeMode: "contain"}} source={require('./../assets/default_profile.png')} />
            <View style={{height: "30%", flex: 1, width: "100%"}}>
                <Text numberOfLines={1} style={styles.name}>{person.name}</Text>
                <Text numberOfLines={1} style={styles.role}>{person.pronouns}</Text>
                <Text numberOfLines={1} style={styles.role}>{person.role}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontFamily: "Kanit_400Regular",
        fontSize: 14,
        textAlign: "center",
        lineHeight: 18
    },
    role: {
        fontFamily: "Kanit_400Regular",
        fontSize: 12,
        textAlign: "center",
        lineHeight: 12
    }
})