/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
 import type {Node} from 'react';
 import {
   Button,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TouchableOpacity,
 } from 'react-native';
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { Component } from 'react/cjs/react.production.min';
 //import 'react-native-gesture-handler'; 
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Scope } from '@babel/traverse';
 

 const Stack = createNativeStackNavigator();

 function TabSettingHome({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Setting Main!</Text>
      <TouchableOpacity 
      style={styles.form} 
      onPress={() => navigation.navigate('SettingQnA')}>
          <Text>QnA</Text>
      </TouchableOpacity>
    </View>
  );
}

function TabSettingQnA({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>TabCovidMainMetro Screen</Text>
      <Button
        title="Go to CovidHomeScreen"
        onPress={() => navigation.navigate('SettingHome')}
      />
      <ScrollView
       style={styles.Scrollstyle}>
      <Text>
        TabCovidMainMetro Screen
      </Text>
      </ScrollView>
    </View>
  );
}

 class TabSettingMain extends Component{
   render(){
     return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SettingHome" component={TabSettingHome} />
        <Stack.Screen name="SettingQnA" component={TabSettingQnA} />
    </Stack.Navigator>
     );
   }
 };
 
 const styles = StyleSheet.create({
   form: {
     //width: 30,
     //height: 30,
     padding: 10,
     backgroundColor: 'green',
   },
   Scrollstyle: {
    width: '100%',
    flex: 1,
    flexDirection: 'column', // row
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'flex-start' // center, space-around
  },
  
 });
 
 export default TabSettingMain;
 