import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigator/Navigator';
import {AuthProvider} from './src/context/AuthContext';
import {StockProvider} from './src/context/StockContext';
import {Platform, SafeAreaView, StatusBar} from 'react-native';
import {RecetaProvider} from './src/context/RecetaContext';
import {EntregaProvider} from './src/context/EntregaContext';
import {MermaProvider} from './src/context/MermaContext';
// import {MenuLateral} from './src/navigator/MenuLateral';
import {AllProvider} from './src/context/AllContext';

const AppState = ({children}: any) => {
  return (
    <AuthProvider>
      <StockProvider>{children}</StockProvider>
      {/* <RecetaProvider>{children}</RecetaProvider> */}
      {/* <EntregaProvider>{children}</EntregaProvider> */}
      {/* <AllProvider>{children}</AllProvider> */}
      {/* <MermaProvider>{children}</MermaProvider> */}
    </AuthProvider>
  );
};

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#1b91ff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>
      <NavigationContainer>
        <AppState>
          <Navigator />
        </AppState>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;
