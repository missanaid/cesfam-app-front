import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen';
import {LoadingScreen} from '../screens/LoadingScreen';
import {AuthContext} from '../context/AuthContext';
import {MedicamentosNavigator} from './MedicamentosNavigator';
import {MedicamentoScreen} from '../screens/MedicamentoScreen';
import {RecetasNavigator} from './RecetasNavigator';
import {RecetaScreen} from '../screens/RecetaScreen';
import {EntregaScreen} from '../screens/EntregaScreen';
import {EntregasNavigator} from './EntregasNavigator';
import {MermasNavigator} from './MermasNavigator';
import {MermaScreen} from '../screens/MermaScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  const {status} = useContext(AuthContext);

  if (status === 'checking') {
    return <LoadingScreen />;
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#e0f6ff',
        },
      }}>
      {status !== 'authenticated' ? (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="MedicamentosNavigator"
            component={MedicamentosNavigator}
          />
          <Stack.Screen
            name="MedicamentoScreen"
            component={MedicamentoScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
