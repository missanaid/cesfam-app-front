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
          <Text style={{fontSize: 15, color: '#ffffff', fontWeight: 'bold'}}>
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
    <View style={{flex: 1, marginHorizontal: 10, paddingTop: 10}}>
      <FlatList
        data={medicamentos}
        keyExtractor={m => m.Id}
        renderItem={({item}) => (
          <View style={styles.viewstyle}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.viewstyle}
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
              <Text style={styles.medTitle}>{item.Nombre}</Text>
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
  medInfo: {
    fontSize: 20,
  },
  medTitle: {
    fontSize: 25,
  },
  itemSeparator: {
    borderBottomWidth: 2,
    marginVertical: 5,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  button: {
    color: '#ffffff',
  },
  viewstyle: {},
});
