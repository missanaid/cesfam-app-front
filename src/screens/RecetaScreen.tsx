import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {RecetasStackParams} from '../navigator/RecetasNavigator';

interface Props extends StackScreenProps<RecetasStackParams, 'RecetaScreen'> {}

export const RecetaScreen = ({navigation, route}: Props) => {
  const {name = '', year, medicamento = '', desc, cant, med} = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: name ? name : 'Lista de Recetas',
    });
  }, [name, navigation]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titleStyle}>{name}</Text>
        <Text style={styles.descStyle}>Edad: {year}</Text>
        <Text style={styles.otherStyle}>Nombre Medicamento: {medicamento}</Text>
        <Text style={styles.otherStyle}>Descripcion: {desc}</Text>
        <Text style={styles.stockStyle}>Cantidad: {cant}</Text>
        <Text style={styles.stockStyle}>Medico: {med}</Text>
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
