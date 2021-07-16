import React from 'react';
import {View, Image} from 'react-native';

export const Logo = () => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/logo2.jpg')}
        style={{
          height: 190,
          width: 140,
        }}
      />
    </View>
  );
};
