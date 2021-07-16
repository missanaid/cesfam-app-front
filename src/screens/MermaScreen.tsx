import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {MermasStackParams} from '../navigator/MermasNavigator';

interface Props extends StackScreenProps<MermasStackParams, 'MermaScreen'> {}

export const MermaScreen = ({navigation, route}: Props) => {
  const {Nombre = '', Cantidad, Detalle = '', Fecha} = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: Nombre ? Nombre : 'Lista de Merma',
    });
  }, [Nombre, navigation]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titleStyle}>Nombre: {Nombre}</Text>
        <Text style={styles.descStyle}>Cantidad: {Cantidad}</Text>
        <Text style={styles.stockStyle}>Fecha: {Fecha}</Text>
        <Text style={styles.stockStyle}>Motivo: {Detalle}</Text>
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
