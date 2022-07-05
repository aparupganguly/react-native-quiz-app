/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, SafeAreaView,StatusBar} from 'react-native';
import QuizScreen from "./QuizScreen";







const App = () => {
  return (
    <>
      <SafeAreaView>
        <StatusBar/>

        <QuizScreen/>
      </SafeAreaView>
    </>
  );
};

export default App;
