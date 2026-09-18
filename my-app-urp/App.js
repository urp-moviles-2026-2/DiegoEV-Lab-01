import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, SafeAreaView, Platform, StatusBar as RNStatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function TareaItem({ tarea }) {
  return (
    <View style={styles.swipeContenedor}>
      <View style={styles.tarjeta}>
        <Text style={styles.textoTarea}>{tarea.texto}</Text>
      </View>
    </View>
  );
}

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

  const agregarTarea = () => {
    const limpio = texto.trim();
    if (limpio === '') return;
    setTareas((prev) => [...prev, { id: Date.now().toString(), texto: limpio }]);
    setTexto('');
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.pantalla}>
        <StatusBar style="dark" />

        <View style={styles.encabezado}>
          <View style={styles.logo}>
            <Ionicons name="checkmark" size={22} color="#fff" />
          </View>
          <Text style={styles.titulo}>Tareas</Text>
        </View>

        <View style={styles.formulario}>
          <View style={styles.inputContenedor}>
            <Ionicons name="create-outline" size={20} color={MORADO} />
            <TextInput
              style={styles.input}
              placeholder="Escribe una nueva tarea..."
              placeholderTextColor="#8a8fa8"
              value={texto}
              onChangeText={setTexto}
              onSubmitEditing={agregarTarea}
              returnKeyType="done"
            />
          </View>
          <TouchableOpacity style={styles.botonAnadir} onPress={agregarTarea} activeOpacity={0.85}>
            <Ionicons name="add" size={20} color="#fff" />
            <Text style={styles.textoAnadir}>Añadir tarea</Text>
          </TouchableOpacity>
        </View>

        {/* Lista con scroll */}
        <FlatList
          data={tareas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TareaItem tarea={item} />}
          contentContainerStyle={styles.lista}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        />
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
  formulario: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 20,
    marginBottom: 16,
  },
  inputContenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eef0fb',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 14,
    fontSize: 16,
    color: '#1f2240',
  },
  botonAnadir: {
    flexDirection: 'row',
    backgroundColor: MORADO,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoAnadir: { color: '#fff', fontSize: 16, fontWeight: '600', marginLeft: 6 },
  lista: { paddingHorizontal: 16, paddingBottom: 24 },
  swipeContenedor: { marginBottom: 12 },
  tarjeta: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 22,
    paddingVertical: 20,
  },
  textoTarea: { fontSize: 16, color: '#1f2240' },
});