import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {EntregasStackParams} from '../navigator/EntregasNavigator';

interface Props
  extends StackScreenProps<EntregasStackParams, 'EntregaScreen'> {}

export const EntregaScreen = ({navigation, route}: Props) => {
  const {
    paciente = '',
    cantidad,
    medicamento = '',
    fecha,
    funcionario,
  } = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: paciente ? paciente : 'Lista de Entregas',
    });
  }, [paciente, navigation]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titleStyle}>Nombre: {paciente}</Text>
        <Text style={styles.otherStyle}>Nombre Medicamento: {medicamento}</Text>
        <Text style={styles.descStyle}>Cantidad: {cantidad}</Text>
        <Text style={styles.stockStyle}>Fecha de Entrega: {fecha}</Text>
        <Text style={styles.stockStyle}>Funcionario: {funcionario}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 10, marginHorizontal: 20, paddingTop: 30},
  titleStyle: {
    paddingTop: 3,
    paddingBottom: 6,
    fontSize: 32,
    fontWeight: 'bold',
  },
  descStyle: {
    paddingTop: 5,
    paddingBottom: 3,
    fontSize: 24,
  },
  otherStyle: {
    paddingTop: 15,
    fontSize: 20,
  },
  stockStyle: {
    paddingTop: 15,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
