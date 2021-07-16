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
import {RecetasStackParams} from '../navigator/RecetasNavigator';
import {AuthContext} from '../context/AuthContext';
import {RecetaContext} from '../context/RecetaContext';

interface Props extends StackScreenProps<RecetasStackParams, 'RecetasScreen'> {}

export const RecetasScreen = ({navigation}: Props) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {recetas, loadRecetas} = useContext(RecetaContext);
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
  const loadRecetasFromBackend = async () => {
    setIsRefreshing(true);
    await loadRecetas();
    setIsRefreshing(false);
  };
  return (
    <View style={{flex: 1, marginHorizontal: 10, paddingTop: 10}}>
      <FlatList
        data={recetas}
        keyExtractor={r => r.Id}
        renderItem={({item}) => (
          <View style={styles.viewstyle}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.viewstyle}
              onPress={() =>
                navigation.navigate('RecetaScreen', {
                  Id: item.Id,
                  name: item.Nombre,
                  year: item.Edad,
                  medicamento: item.Medicamento,
                  desc: item.Descripcion,
                  cant: item.Cantidad,
                  med: item.Medico,
                })
              }>
              <Text style={styles.medTitle}>Paciente: {item.Nombre}</Text>
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={loadRecetasFromBackend}
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
