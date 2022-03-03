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
//Tab Navigate
import TabCovidMain from './TabCovidMain';
import TabSettingMain from './TabSettingMain';
import { TextInput } from 'react-native-gesture-handler';

//DB connection
function TabVaccine() {
  return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Text>Vaccine Policy Screen!</Text>
       <TextInput
        placeholder={"Column1"}
        placeholderTextColor={"red"}
       />
     </View>
  );
}


//Main Tab Navigate
const Tab = createBottomTabNavigator();

class App extends Component{

  handleChange =(e)=>{
    this.setState({
      [e.target.name] : e.target.value,
    });
  }

  render(){
    return (
      <NavigationContainer>
        <Tab.Navigator>
          {/* <Tab.Screen name="Covid" component={TabCovid}  /> */}
          <Tab.Screen name="CovidMain" component={TabCovidMain}  />
          <Tab.Screen name="Vaccine" component={TabVaccine} />
          <Tab.Screen name="Setting" component={TabSettingMain} />
        </Tab.Navigator>
      </NavigationContainer>
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
 
});


export default App;
