import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';
import XOverHeader from '../components/XOverHeader';
import XOverButton from '../components/XOverButton';

export default function Projects({navigation, route}) {

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      navigation.dispatch(CommonActions.setParams({project: null}));
    });
    return unsubscribe;
    }, [navigation]);

  return route?.params?.project ? (
    <View style={{flex: 1, marginTop: 40, marginLeft: 20 }}>
      <XOverButton text={"Back"} pressFunc={() => {navigation.dispatch(CommonActions.setParams({ project: null })); navigation.dispatch(CommonActions.goBack())}} />
      <View style={{marginTop: 40}}>
        <XOverHeader text={route.params.project.name} />
      </View>
    </View>
  ) : (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to Projects</Text>
    </View>
  );
}