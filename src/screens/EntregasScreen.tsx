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
import {EntregasStackParams} from '../navigator/EntregasNavigator';
import {AuthContext} from '../context/AuthContext';
import {EntregaContext} from '../context/EntregaContext';

interface Props
  extends StackScreenProps<EntregasStackParams, 'EntregasScreen'> {}

export const EntregasScreen = ({navigation}: Props) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {entregas, loadEntregas} = useContext(EntregaContext);
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
  const loadEntregasFromBackend = async () => {
    setIsRefreshing(true);
    await loadEntregas();
    setIsRefreshing(false);
  };
  return (
    <View style={{flex: 1, marginHorizontal: 10, paddingTop: 10}}>
      <FlatList
        data={entregas}
        keyExtractor={r => r.Id}
        renderItem={({item}) => (
          <View style={styles.viewstyle}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.viewstyle}
              onPress={() =>
                navigation.navigate('EntregaScreen', {
                  Id: item.Id,
                  paciente: item.Paciente,
                  medicamento: item.Medicamento,
                  cantidad: item.Cantidad,
                  fecha: item['Fecha de Entrega'],
                  funcionario: item.Funcionario,
                })
              }>
              <Text style={styles.medTitle}>Paciente: {item.Paciente}</Text>
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={loadEntregasFromBackend}
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
