import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar as RNStatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
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

        {/* Encabezado */}
        <View style={styles.encabezado}>
          <View style={styles.logo}>
            <Ionicons name="checkmark" size={22} color="#fff" />
          </View>
          <Text style={styles.titulo}>Tareas</Text>
        </View>
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
  encabezado: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: MORADO,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  titulo: { fontSize: 22, fontWeight: '700', color: '#1f2240' },
});