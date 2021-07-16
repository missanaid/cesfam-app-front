import React from 'react';
import {View} from 'react-native';

export const Background = () => {
  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#00C2FF',
        height: 1200,
        top: -350,
        width: 1000,
        transform: [{rotate: '-70deg'}],
      }}
    />
  );
};
