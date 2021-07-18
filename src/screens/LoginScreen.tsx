import React, {useContext, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  TextInput,
  Text,
  Platform,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
} from 'react-native';
import {Background} from '../components/Background';
import {Logo} from '../components/Logo';
import {loginStyles} from '../theme/loginTheme';
import {useForm} from '../hooks/useForm';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthContext} from '../context/AuthContext';

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({navigation}: Props) => {
  const {signIn, errorMessage, removeError} = useContext(AuthContext);

  const {usuario, password, onChange} = useForm({
    usuario: '',
    password: '',
  });

  useEffect(() => {
    SplashScreen.hide();
    if (errorMessage.length === 0) {
      return;
    }

    Alert.alert('Error al Iniciar Sesión', errorMessage, [
      {
        text: 'Ok',
        onPress: removeError,
      },
    ]);
  }, [errorMessage, removeError]);

  const onLogin = () => {
    console.log({usuario, password});
    Keyboard.dismiss();
    signIn({user: usuario, password});
  };
  return (
    <>
      <Background />

      <View style={loginStyles.formContainer}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        />
        <Logo />
        <Text style={loginStyles.title}>Iniciar Sesión </Text>
        <Text style={loginStyles.label}>Usuario: </Text>
        <TextInput
          placeholder="Nombre de Usuario"
          placeholderTextColor="#ffffffef"
          underlineColorAndroid="#000b72df"
          style={[
            loginStyles.inputField,
            Platform.OS === 'ios' && loginStyles.inputFieldIOS,
          ]}
          selectionColor="#0011afb7"
          onChangeText={value => onChange(value, 'usuario')}
          value={usuario}
          onSubmitEditing={onLogin}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={loginStyles.label}>Contraseña: </Text>
        <TextInput
          placeholder="******"
          placeholderTextColor="#ffffffdd"
          underlineColorAndroid="#000b72ac"
          secureTextEntry
          style={[
            loginStyles.inputField,
            Platform.OS === 'ios' && loginStyles.inputFieldIOS,
          ]}
          selectionColor="#0011afb7"
          onChangeText={value => onChange(value, 'password')}
          value={password}
          onSubmitEditing={onLogin}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View style={loginStyles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={loginStyles.button}
            onPress={onLogin}>
            <Text style={loginStyles.buttonText}> Entrar</Text>
          </TouchableOpacity>
        </View>
        <View style={loginStyles.label}>
          <Text style={loginStyles.footer}>
            Cesfam 2021 | Todos los derechos reservados
          </Text>
        </View>
      </View>
    </>
  );
};
