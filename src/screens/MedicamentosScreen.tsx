import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {MedicamentosStackParams} from '../navigator/MedicamentosNavigator';
import {StockContext} from '../context/StockContext';
import {AuthContext} from '../context/AuthContext';

interface Props
  extends StackScreenProps<MedicamentosStackParams, 'MedicamentosScreen'> {}

export const MedicamentosScreen = ({navigation}: Props) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {medicamentos, loadMedicamentos} = useContext(StockContext);
  const {logOut} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.8}
          style={{marginRight: 10}}
          onPress={logOut}>
          <Text
            style={{
              fontSize: 15,
              color: '#ffffff',
              fontWeight: 'bold',
            }}>
            Cerrar Sesión
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [logOut, navigation]);
  const loadMedicamentosFromBackend = async () => {
    setIsRefreshing(true);
    await loadMedicamentos();
    setIsRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={medicamentos}
        keyExtractor={m => m.Id}
        renderItem={({item}) => (
          <View style={styles.item2}>
            <TouchableOpacity
              style={styles.wrapText}
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate('MedicamentoScreen', {
                  id: item.Id,
                  name: item.Nombre,
                  desc: item.Descripcion,
                  gramo: item.Gramos,
                  stock: item.Stock,
                  type: item['Tipo de Medicamento'],
                })
              }>
              <Text style={styles.medTitle}>{item.Nombre} </Text>
              <View style={styles.projectText}>
                <Text style={styles.medStock}>En Stock: {item.Stock}</Text>
                <Text style={styles.verMas}>&#8250; </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={loadMedicamentosFromBackend}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  medTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  medStock: {
    fontSize: 16,
  },
  verMas: {
    fontSize: 20,
    color: '#0084ff',
    fontWeight: 'bold',
  },
  itemSeparator: {
    marginVertical: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#0084ff60',
  },
  items: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
  wrapText: {
    flex: 1,
    marginLeft: 10,
  },
  container: {
    flex: 1,
    marginHorizontal: 10,
    paddingTop: 10,
  },
  item2: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
  },
  projectText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
