import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Platform, StatusBar as RNStatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const MORADO = '#4f46e5';

export default function App() {
  const [texto, setTexto] = useState('');
  const [tareas, setTareas] = useState([
    { id: '1', texto: 'Informe de métricas' },
    { id: '2', texto: 'Comprar insumos para el taller' },
    { id: '3', texto: 'Revisar pull request de pasarela' },
    { id: '4', texto: 'Llamar al médico para cita anual' },
    { id: '5', texto: 'Enviar reporte semanal por correo' },
  ]);

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