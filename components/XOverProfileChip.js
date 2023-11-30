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
        <View style={{height: 65, width: 65, marginHorizontal: 20, resizeMode: "contain"}}>
            <Image style={{flex: 1, height: "60%", width: "auto", resizeMode: "contain"}} source={require('./../assets/default_profile.png')} />
            <View style={{height: "40%", flex: 1}}>
                <Text style={styles.name}>{person.name}</Text>
                <Text style={styles.role}>{person.pronouns}</Text>
                <Text style={styles.role}>{person.role}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    name: {
        fontFamily: "Kanit_400Regular",
        fontSize: 14,
        textAlign: "center",
        lineHeight: 16
    },
    role: {
        fontFamily: "Kanit_400Regular",
        fontSize: 10,
        textAlign: "center",
        lineHeight: 12
    }
})