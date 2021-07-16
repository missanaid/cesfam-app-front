import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RecetasScreen} from '../screens/RecetasScreen';
import {RecetaScreen} from '../screens/RecetaScreen';

export type RecetasStackParams = {
  RecetasScreen: undefined;
  RecetaScreen: {
    Id: string;
    name: string;
    year: number;
    medicamento: string;
    desc: string;
    cant: number;
    med: string;
  };
};

const Stack = createStackNavigator<RecetasStackParams>();

export const RecetasNavigator = () => {
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
        name="RecetasScreen"
        component={RecetasScreen}
        options={{
          title: 'Lista de Recetas',
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
        name="RecetaScreen"
        component={RecetaScreen}
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
