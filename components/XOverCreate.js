import { Text, View, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import XOverButton from "./XOverButton";
import XOverTheme from "../assets/XOverTheme";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Kanit_400Regular } from "@expo-google-fonts/kanit";
import { TextInput } from "react-native-gesture-handler";
import * as DocumentPicker from 'expo-document-picker';

export default function XOverCreate({setCreateModal}) {

    const [pageNum, changePageNum] = useState(0);

    const selectPDF = async () => {
        try {
          const result = await DocumentPicker.getDocumentAsync();
          console.log(
            result.uri,
            result.type, // mime type
            result.name,
            result.size
          );
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
            // User cancelled the picker
          } else {
            throw err;
          }
        }
      }

    let [fontsLoaded] = useFonts({
        Kanit_400Regular
      });
    
    if (!fontsLoaded) {
    return null;
    }

    return (
        <View style={{flex: 1, width: "100%", height: "100%", padding: 20, alignItems: "center", justifyContent: "center", backgroundColor: XOverTheme.bg_blue + "d0"}}>
            {pageNum === 0 && 
            <View style={{width: "100%", marginHorizontal: "5%", height: "90%", backgroundColor: "white", borderRadius: 15, padding: 10}}>
                <XOverButton icon={(<FontAwesome style={{fontSize: 32 }} name="arrow-left" />)} pressFunc={() => {setCreateModal(false)}} />
                <View style={{flex: 9, alignItems: "center", justifyContent: "space-around", height: "90%"}}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>Create Your X-Over</Text>
                    </View>
                    <TextInput placeholderTextColor={"white"} style={styles.input} placeholder="Project Name" />
                    <TextInput multiline numberOfLines={6} placeholderTextColor={"white"} style={[styles.input, styles.description]} placeholder="Description" />
                    <View style={styles.fileBrowseContainer} >
                        <Pressable onPress={selectPDF}>
                            <FontAwesome style={{fontSize: 44, color: "white", alignSelf: "center" }} name="photo" />
                            <Text style={styles.infoText}>Choose Project Thumbnail Image</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={{flex: 1, alignSelf: "flex-end", marginRight: 20}}>
                    <XOverButton text={"Next"} pressFunc={() => {changePageNum(pageNum + 1)}} />
                </View>
            </View>}
            {pageNum === 1 &&
            <View style={{width: "100%", marginHorizontal: "5%", height: "90%", backgroundColor: "white", borderRadius: 15, padding: 10}}>
                <XOverButton text={"Back"} pressFunc={() => {changePageNum(pageNum - 1)}} />
                <XOverButton text={"Next"} pressFunc={() => {changePageNum(pageNum + 1)}} />
            </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    infoContainer: {
        backgroundColor: XOverTheme.bg_blue + "d0",
        width: "100%",
        height: "10%",
        justifyContent: "center",
        borderRadius: 50
    },
    infoText: {
        fontFamily: "Kanit_400Regular",
        fontSize: 18,
        textAlign: "center",
        color: "white"
    },
    input: {
        fontFamily: "Kanit_400Regular",
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
        marginHorizontal: "5%",
        color: "white",
        padding: 10,
        flexDirection: "row",
        backgroundColor: XOverTheme.bg_blue,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly"
      },
    description: {
    },
    fileBrowseContainer: {
        backgroundColor: XOverTheme.bg_blue,
        width: "90%",
        marginHorizontal: "10%",
        height: "30%",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    }
});