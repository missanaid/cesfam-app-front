import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MedicamentosScreen} from '../screens/MedicamentosScreen';
import {MedicamentoScreen} from '../screens/MedicamentoScreen';

export type MedicamentosStackParams = {
  MedicamentosScreen: undefined;
  MedicamentoScreen: {
    id?: string;
    name?: string;
    desc?: string;
    gramo?: string;
    stock?: number;
    type?: string;
  };
};

const Stack = createStackNavigator<MedicamentosStackParams>();

export const MedicamentosNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: '#e0f6ff',
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen
        name="MedicamentosScreen"
        component={MedicamentosScreen}
        options={{
          title: 'Lista de Medicamentos',
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
        name="MedicamentoScreen"
        component={MedicamentoScreen}
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

      {/* <Stack.Screen name="MedicamentoScreen" component={MedicamentoScreen} /> */}
    </Stack.Navigator>
  );
};
