import React from 'react';
import { StyleSheet, View, SafeAreaView, Platform, StatusBar as RNStatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.pantalla}>
        <StatusBar style="dark" />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: '#f4f5fb',
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
  },
});