import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EntregasScreen} from '../screens/EntregasScreen';
import {EntregaScreen} from '../screens/EntregaScreen';

export type EntregasStackParams = {
  EntregasScreen: undefined;
  EntregaScreen: {
    Id: string;
    paciente: string;
    medicamento: string;
    cantidad: number;
    fecha: string;
    funcionario: string;
  };
};

const Stack = createStackNavigator<EntregasStackParams>();

export const EntregasNavigator = () => {
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
        name="EntregasScreen"
        component={EntregasScreen}
        options={{
          title: 'Lista de Entregas',
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
        name="EntregaScreen"
        component={EntregaScreen}
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
