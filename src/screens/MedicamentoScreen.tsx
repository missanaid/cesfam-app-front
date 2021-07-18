import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {MedicamentosStackParams} from '../navigator/MedicamentosNavigator';

interface Props
  extends StackScreenProps<MedicamentosStackParams, 'MedicamentoScreen'> {}

export const MedicamentoScreen = ({navigation, route}: Props) => {
  const {name = '', stock, desc = '', gramo, type} = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: 'Medicamento',
    });
  }, [name, navigation]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.box}>
          <Text style={styles.titleStyle}>{name}</Text>

          <Text style={styles.descStyle}>
            <Text style={{fontWeight: 'bold'}}>Descripción: </Text> {desc}.
          </Text>
          <Text style={styles.otherStyle}>
            <Text style={{fontWeight: 'bold'}}>Gramos: </Text> {gramo}
          </Text>
          <Text style={styles.otherStyle}>
            <Text style={{fontWeight: 'bold'}}>Tipo de Medicamento: </Text>{' '}
            {type}
          </Text>
          <Text style={styles.stockStyle}>
            <Text style={{fontWeight: 'bold'}}>En Stock: </Text> {stock}
          </Text>
        </View>
        <View style={styles.buttonM}>
          <TouchableHighlight
            underlayColor={'#313131'}
            activeOpacity={0.8}
            style={styles.atrasButton}
            onPress={() => navigation.navigate('MedicamentosScreen')}>
            <Text style={styles.atrasButtonText}>Atrás</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '5%',
    marginHorizontal: 20,
    paddingTop: '20%',
  },
  titleStyle: {
    paddingTop: 3,
    paddingBottom: 6,
    fontSize: 28,
    fontWeight: 'bold',
  },
  descStyle: {
    paddingTop: 5,
    paddingBottom: 3,
    fontSize: 18,
  },
  otherStyle: {
    paddingTop: 15,
    fontSize: 18,
  },
  stockStyle: {
    paddingTop: 15,
    fontSize: 20,
  },
  buttonM: {
    paddingTop: '30%',
    marginHorizontal: 120,
  },
  atrasButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#00000061',
    borderWidth: 2,
    backgroundColor: '#1b91ff',
  },
  atrasButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  box: {
    padding: 5,
    alignItems: 'flex-start',
  },
  text2: {
    fontWeight: 'bold',
  },
});
