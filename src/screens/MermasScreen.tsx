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
import {MermasStackParams} from '../navigator/MermasNavigator';
import {AuthContext} from '../context/AuthContext';
import {MermaContext} from '../context/MermaContext';

interface Props extends StackScreenProps<MermasStackParams, 'MermasScreen'> {}

export const MermasScreen = ({navigation}: Props) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {mermas, loadMermas} = useContext(MermaContext);
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
  const loadMermasFromBackend = async () => {
    setIsRefreshing(true);
    await loadMermas();
    setIsRefreshing(false);
  };
  return (
    <View style={{flex: 1, marginHorizontal: 10, paddingTop: 10}}>
      <FlatList
        data={mermas}
        keyExtractor={r => r.Id}
        renderItem={({item}) => (
          <View style={styles.viewstyle}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.viewstyle}
              onPress={() =>
                navigation.navigate('MermaScreen', {
                  Id: item.Id,
                  Nombre: item.Nombre,
                  Cantidad: item.Cantidad,
                  Detalle: item.Detalle,
                  Fecha: item.Fecha,
                })
              }>
              <Text style={styles.medTitle}>Medicamento: {item.Nombre}</Text>
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={loadMermasFromBackend}
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
    padding: 10,
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
