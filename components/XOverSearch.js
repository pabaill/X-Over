import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import XOverTheme from "../assets/XOverTheme";
import { useFonts } from "expo-font";
import { Kanit_400Regular } from "@expo-google-fonts/kanit";

export default function XOverSearch ({clicked, searchPhrase, setSearchPhrase, setClicked, setShowProjectList}) {

    let [fontsLoaded] = useFonts({
        Kanit_400Regular
        });

        if (!fontsLoaded) {
        return null;
        }

  return (
    <View style={styles.container} onPress={() => {Keyboard.dismiss()}}>
      <ScrollView
        contentContainerStyle={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      >
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="white"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
            if (setShowProjectList) {
              setShowProjectList(false);
            }
          }}
          onSubmitEditing={() => {
            if (setShowProjectList && searchPhrase.length > 0) {
              setShowProjectList(true);
            }
            Keyboard.dismiss();
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              Keyboard.dismiss();
              setSearchPhrase("");
              setClicked(false);
              if (setShowProjectList) {
                setShowProjectList(false);
              }
          }}/>
        )}
      </ScrollView>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    margin: "5%",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "95%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: XOverTheme.bg_blue,
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: XOverTheme.bg_blue,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontFamily: "Kanit_400Regular",
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
    color: "white"
  },
});