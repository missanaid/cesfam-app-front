import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {MedicamentosStackParams} from '../navigator/MedicamentosNavigator';

interface Props
  extends StackScreenProps<MedicamentosStackParams, 'MedicamentoScreen'> {}

export const MedicamentoScreen = ({navigation, route}: Props) => {
  const {name = '', stock, desc = '', gramo, type} = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: name ? name : 'Stock del Producto',
    });
  }, [name, navigation]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titleStyle}>{name}</Text>
        <Text style={styles.descStyle}>Descripción: {desc}</Text>
        <Text style={styles.otherStyle}>Gramos: {gramo}</Text>
        <Text style={styles.otherStyle}>Tipo de Medicamento: {type}</Text>
        <Text style={styles.stockStyle}>En stock: {stock}</Text>
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
