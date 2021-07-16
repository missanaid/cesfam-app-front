import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MermasScreen} from '../screens/MermasScreen';
import {MermaScreen} from '../screens/MermaScreen';

export type MermasStackParams = {
  MermasScreen: undefined;
  MermaScreen: {
    Id: string;
    Nombre: string;
    Cantidad: number;
    Detalle: string;
    Fecha: string;
  };
};

const Stack = createStackNavigator<MermasStackParams>();

export const MermasNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen
        name="MermasScreen"
        component={MermasScreen}
        options={{
          title: 'Lista de Merma',
          headerStyle: {
            backgroundColor: '#1b91ff',
          },
          headerTitleAllowFontScaling: true,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
          },
        }}
      />
      <Stack.Screen
        name="MermaScreen"
        component={MermaScreen}
        options={{
          headerStyle: {
            backgroundColor: '#1b91ff',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
          },
        }}
      />
    </Stack.Navigator>
  );
};
